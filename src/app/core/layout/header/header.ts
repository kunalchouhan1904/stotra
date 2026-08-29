import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  isDarkMode = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('stotra-theme');

    this.isDarkMode =
      savedTheme === 'dark' ||
      (savedTheme === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    this.applyTheme();
  }

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
      this.renderer.addClass(this.document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-mode');
    }
  }
}
