import {Component, Input, OnInit, Output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomValidators} from "../../../services/custom-valiodators/CustomValidators";
import {NgIf, NgTemplateOutlet} from "@angular/common";
import EventEmitter from "events";
import {RegisterModalService} from "../../../services/modal-services/register-modal.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgTemplateOutlet, NgIf],
  templateUrl: 'register.component.html',
  styleUrl: '../styles/authorization.master.scss'
})
export class RegisterComponent implements OnInit{

  public registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerModalService: RegisterModalService) {}

  public closeRegisterModal(): void {
    this.registerModalService.closeRegisterModal();
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    console.log(this.registrationForm.value);
  }
}