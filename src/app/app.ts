import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Header } from "@app/layout"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'star-wars-info';
}
