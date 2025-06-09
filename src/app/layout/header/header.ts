import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  navLinks = signal([
    {label: "Films", path: "/films"},
    {label: "People", path: "/people"},
    {label: "Planets", path: "/planets"},
    {label: "Species", path: "/species"},
    {label: "Vehicles", path: "/vehicles"},
    {label: "Starships", path: "/starships"}
  ])

}
