import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isCollapsed = true;

  toggleNav(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeNav(): void {
    this.isCollapsed = true;
  }
}
