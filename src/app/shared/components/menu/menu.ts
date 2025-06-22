import { Component, signal } from '@angular/core';
import { Navbar } from "@app/shared/components";

@Component({
  selector: 'app-menu',
  imports: [Navbar],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }
}
