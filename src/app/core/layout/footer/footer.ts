import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {

  deities = [
    { symbol: '🚩', name: 'Hanuman' },
    { symbol: '🔱', name: 'Shiva' },
    { symbol: '🏹', name: 'Rama' },
    { symbol: '🦚', name: 'Krishna' },
    { symbol: '🐘', name: 'Ganesha' },
    { symbol: '🌺', name: 'Durga' },
    { symbol: '🪷', name: 'Lakshmi' },
    { symbol: '📚', name: 'Saraswati' }
  ];

}