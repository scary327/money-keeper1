import {Component, ElementRef, OnInit, TemplateRef, ViewChild,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf, NgTemplateOutlet} from "@angular/common";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {RegisterModalService} from "../../../services/modal-services/register-modal.service";
import {LoginModalService} from "../../../services/modal-services/login-modal.service";

@Component({
  selector: 'authorization-buttons',
  standalone: true,
  imports: [RouterOutlet, NgIf, RegisterComponent, LoginComponent, NgTemplateOutlet],
  templateUrl: 'authorization-buttons.component.html',
  styleUrl: './styles/authorization-buttons.scss'
})
export class AuthorizationButtonsComponent implements OnInit{
  public registerButton: string = "sign up";
  public logButton: string = "log in";

  public showRegisterModal:boolean = false;
  public showLoginModal:boolean = false;

  constructor(private registerModalService: RegisterModalService, private loginModalService: LoginModalService) {}

  public openRegisterModal(): void {
    this.registerModalService.openRegisterModal()
  }

  public openLoginModal(): void {
    this.loginModalService.openLoginModal();
  }

  public ngOnInit() {
    this.registerModalService.isModalOpen$.subscribe(isOpen => {
      this.showRegisterModal = isOpen;
    });
    this.loginModalService.isModalOpen$.subscribe(isOpen => {
      this.showLoginModal = isOpen;
    })
  }
}
