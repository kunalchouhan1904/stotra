import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
  collapsed = false;
  mobileOpen = false;

  @Output() toggleCollapse = new EventEmitter<boolean>();

  toggleSidebar(): void {
    if (window.innerWidth <= 900) {
      this.mobileOpen = !this.mobileOpen;
    } else {
      this.collapsed = !this.collapsed;
      this.toggleCollapse.emit(this.collapsed);
    }
  }

  closeMobileSidebar(): void {
    this.mobileOpen = false;
  }

  onNavigationClick(): void {
    if (this.mobileOpen) {
      this.closeMobileSidebar();
    }
  }
}