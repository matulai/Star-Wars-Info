import { Component } from '@angular/core';
import { Navbar, Menu } from "@app/shared/components";

@Component({
  selector: 'app-header',
  imports: [Navbar, Menu],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
}
