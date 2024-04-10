import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderNavigationComponent} from "../components/header-navigation/header-navigation.component";
import {WelcomePageButtonsComponent} from "../components/welcome-page-buttons/welcome-page-buttons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavigationComponent, WelcomePageButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Money Keeper';
  description: string = 'free manage tool for your wallet';
}
