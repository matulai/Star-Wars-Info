import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  navLinks = [
    {label: "Films", path: "/films"},
    {label: "People", path: "/people"},
    {label: "Planets", path: "/planets"},
    {label: "Species", path: "/species"},
    {label: "Vehicles", path: "/vehicles"},
    {label: "Starships", path: "/starships"}
  ]
}
