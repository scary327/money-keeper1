import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'welcome-registered-buttons',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'welcome-page-buttons.component.html',
  styleUrl: './welcome-page-buttons.component.scss'
})
export class WelcomePageButtonsComponent {
  signButton: string = "sign up";
  logButton: string = "log in";
}
