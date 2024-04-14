import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";
import {HeaderNavigationComponent} from "../../components/header-navigation/header-navigation.component";
import {
  AuthorizationButtonsComponent
} from "../../components/authorization/authorization-buttons/authorization-buttons.component";
import {RegisterModalService} from "../../services/modal-services/register-modal.service";

@Component({
  selector: 'welcome-page',
  standalone: true,
  imports: [RouterOutlet, HeaderNavigationComponent, AuthorizationButtonsComponent, NgIf],
  templateUrl: 'welcome-page.component.html',
  styleUrl: './styles/welcome-page.scss'
})
export class WelcomePageComponent {
  public title: string = 'Money Keeper';
  public description: string = 'free manage tool for your wallet';

  public isAuthorized: boolean = false;

  constructor(private registerModalService: RegisterModalService) {}

  public openRegisterModal(): void {
    this.registerModalService.openRegisterModal();
  }
}
