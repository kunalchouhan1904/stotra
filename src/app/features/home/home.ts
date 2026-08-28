import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

  categories = [
    {
      icon: 'ॐ',
      title: 'Chalisa',
      description: 'Devotional verses'
    },
    {
      icon: '📿',
      title: 'Mantra',
      description: 'Sacred chants'
    },
    {
      icon: '🪔',
      title: 'Aarti',
      description: 'Prayers of worship'
    },
    {
      icon: '📖',
      title: 'Stotra',
      description: 'Sacred hymns'
    }
  ];

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

  festivals = [
    'Diwali',
    'Navratri',
    'Mahashivratri',
    'Ram Navami',
    'Hanuman Jayanti',
    'Janmashtami'
  ];
}