import { Component } from '@angular/core';
import { Navbar, Menu } from "@app/shared/components";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Navbar, Menu, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
}
