import {Component, Input, OnInit, Output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, NgTemplateOutlet} from "@angular/common";
import {AuthorizationButtonsComponent} from "../authorization-buttons/authorization-buttons.component";
import EventEmitter from "events";
import {LoginModalService} from "../../../services/modal-services/login-modal.service";
import {CustomValidators} from "../../../services/custom-valiodators/CustomValidators";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf, NgTemplateOutlet],
  templateUrl: 'login.component.html',
  styleUrl: '../styles/authorization.master.scss'
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginModalService: LoginModalService) {}

  public closeLoginModal(): void {
    this.loginModalService.closeLoginModal();
  }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  onSubmit():void {
    console.log(this.loginForm.value);
  }
}
