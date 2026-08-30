import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterLink
} from '@angular/router';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {

  isDarkMode = false;

  /* =====================================================
     AUDIO READER
  ====================================================== */

  isPlaying = false;
  isPaused = false;

  playbackRate = 0.9;

  private speech = window.speechSynthesis;

  private speechQueue: SpeechSynthesisUtterance[] = [];

  private currentChunk = 0;

  private routerSubscription?: Subscription;


  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}


  /* =====================================================
     INITIALIZATION
  ====================================================== */

  ngOnInit(): void {

    const savedTheme =
      localStorage.getItem('stotra-theme');

    this.isDarkMode =
      savedTheme === 'dark' ||
      (
        savedTheme === null &&
        window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
      );

    this.applyTheme();


    /*
     * Stop the current prayer when moving to another
     * Chalisa / Aarti / Mantra / Stotra route.
     */

    this.routerSubscription =
      this.router.events.subscribe(event => {

        if (event instanceof NavigationEnd) {

          this.stopAudio();

        }

      });

  }


  /* =====================================================
     THEME
  ====================================================== */

  toggleTheme(): void {

    this.isDarkMode = !this.isDarkMode;

    localStorage.setItem(
      'stotra-theme',
      this.isDarkMode ? 'dark' : 'light'
    );

    this.applyTheme();
  }


  private applyTheme(): void {

    if (this.isDarkMode) {

      this.renderer.addClass(
        this.document.body,
        'dark-mode'
      );

    } else {

      this.renderer.removeClass(
        this.document.body,
        'dark-mode'
      );

    }

  }


  /* =====================================================
     GET CURRENT PRAYER CONTENT
  ====================================================== */

  private getReaderContent(): string {

    /*
     * Only read the actual prayer paragraphs.
     *
     * This deliberately ignores:
     * - Back to Collection
     * - page titles
     * - subtitles
     * - section headings
     *
     * because those are outside the prayer text.
     */

    const paragraphs =
      this.document.querySelectorAll(
        '.reader-scroll .book-columns p'
      );

    if (!paragraphs.length) {
      return '';
    }


    return Array.from(paragraphs)
      .map(element =>
        (element.textContent || '')
          .replace(/\s+/g, ' ')
          .trim()
      )
      .filter(Boolean)
      .join(' ');
  }


  /* =====================================================
     PLAY
  ====================================================== */

  playAudio(): void {

    const content =
      this.getReaderContent();

    /*
     * Nothing to read on pages such as Home or a
     * collection-selection screen.
     */

    if (!content) {
      return;
    }


    /*
     * If speech was paused, resume it.
     */

    if (this.isPaused) {

      this.speech.resume();

      this.isPaused = false;
      this.isPlaying = true;

      return;
    }


    /*
     * Start from the beginning.
     */

    this.speech.cancel();

    this.speechQueue =
      this.createSpeechQueue(content);

    this.currentChunk = 0;

    this.isPlaying = true;
    this.isPaused = false;

    this.speakNextChunk();
  }


  /* =====================================================
     PAUSE / RESUME
  ====================================================== */

  togglePause(): void {

    if (!this.isPlaying) {
      return;
    }


    if (this.isPaused) {

      this.speech.resume();

      this.isPaused = false;

    } else {

      this.speech.pause();

      this.isPaused = true;

    }

  }


  /* =====================================================
     STOP
  ====================================================== */

  stopAudio(): void {

    this.speech.cancel();

    this.speechQueue = [];

    this.currentChunk = 0;

    this.isPlaying = false;
    this.isPaused = false;

  }


  /* =====================================================
     SPEED
  ====================================================== */

  setPlaybackRate(event: Event): void {

    const select =
      event.target as HTMLSelectElement;

    const newRate =
      Number(select.value);

    this.playbackRate =
      Number.isFinite(newRate)
        ? newRate
        : 0.9;


    /*
     * Browser speech engines apply rate to a new
     * utterance, so restart the current prayer if
     * it was already playing.
     */

    if (this.isPlaying) {

      this.stopAudio();

      setTimeout(() => {
        this.playAudio();
      });

    }

  }


  /* =====================================================
     CREATE SPEECH QUEUE
  ====================================================== */

  private createSpeechQueue(
    text: string
  ): SpeechSynthesisUtterance[] {

    const chunks: string[] = [];

    /*
     * Keep utterances reasonably short because some
     * browsers have limits with long Hindi text.
     */

    const sentences =
      text.split(/(?<=[।॥.!?])\s+/);


    let current = '';


    for (const sentence of sentences) {

      const next =
        `${current} ${sentence}`.trim();


      if (next.length > 220) {

        if (current.trim()) {
          chunks.push(current.trim());
        }

        current = sentence.trim();

      } else {

        current = next;

      }

    }


    if (current.trim()) {
      chunks.push(current.trim());
    }


    return chunks.map(
      textChunk => {

        const utterance =
          new SpeechSynthesisUtterance(
            textChunk
          );


        /*
         * Hindi is important here because the prayer
         * content is written in Devanagari.
         */

        utterance.lang = 'hi-IN';

        utterance.rate =
          this.playbackRate;

        utterance.pitch = 1;

        utterance.volume = 1;


        /*
         * Prefer an installed Hindi voice when the
         * browser provides one.
         */

        const voices =
          this.speech.getVoices();

        const hindiVoice =
          voices.find(voice =>
            voice.lang
              .toLowerCase()
              .startsWith('hi')
          );


        if (hindiVoice) {
          utterance.voice = hindiVoice;
        }


        utterance.onend = () => {

          this.currentChunk++;

          if (
            this.currentChunk <
            this.speechQueue.length
          ) {

            this.speakNextChunk();

          } else {

            this.isPlaying = false;
            this.isPaused = false;
            this.currentChunk = 0;

          }

        };


        utterance.onerror = () => {

          this.isPlaying = false;
          this.isPaused = false;
          this.currentChunk = 0;

        };


        return utterance;

      }
    );

  }


  /* =====================================================
     SPEAK NEXT CHUNK
  ====================================================== */

  private speakNextChunk(): void {

    if (
      this.currentChunk >=
      this.speechQueue.length
    ) {

      this.isPlaying = false;
      this.isPaused = false;

      return;
    }


    const utterance =
      this.speechQueue[this.currentChunk];

    this.speech.speak(utterance);

  }


  /* =====================================================
     CLEANUP
  ====================================================== */

  ngOnDestroy(): void {

    this.stopAudio();

    this.routerSubscription?.unsubscribe();

  }

}
