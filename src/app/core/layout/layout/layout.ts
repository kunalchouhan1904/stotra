import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    Header,
    Sidebar,
    FooterComponent,  
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})

export class Layout {
  isSidebarCollapsed = false;
}