import {Component, OnInit} from "@angular/core";
import {HeaderNavigationComponent} from "../../components/header-navigation/header-navigation.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomValidators} from "../../services/custom-valiodators/CustomValidators";

export interface User {
  userName: string,
  email: string,
  password: string,
  img: string
}

@Component({
  selector: 'user-profile-page',
  standalone: true,
  imports: [
    HeaderNavigationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: 'user-profile.component.html',
  styleUrl: './styles/user-profile.master.scss'
})
export class UserProfileComponent implements OnInit{
  //userа надо получать с fb
  public user: User = {
    userName: 'Lol-Govno',
    email: 'lol-govno@mail.ru',
    password: 'luchsheVdotu',
    img: ''
  };

  public title: string = 'User Profile';

  public userInfoForm!: FormGroup;
  public passwordChangeForm!: FormGroup;
  public isEditMode: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.userInfoForm = this.formBuilder.group({
      userName: [this.user.userName, Validators.required],
      email: [this.user.email, [Validators.required, CustomValidators.emailValidator]],
      img: [this.user.img]
    })

    this.passwordChangeForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      repeatNewPassword: ['', [Validators.required]]
    }, {
      validators: []
    });
  }

  public userImg:string = this.user.img ? this.user.img : './assets/images/default-avatar.png';

  public toggleEditMode(): void {
    this.isEditMode =!this.isEditMode;
    this.userInfoForm[this.isEditMode? 'enable' : 'disable']();
  }
  public ngOnInit(): void {
    this.userInfoForm.patchValue({
      userName: this.user.userName,
      email: this.user.email,
      img: this.user.img
    });

    this.userInfoForm.disable();
  }

  public changePassword(): void {
    const oldPassword = this.passwordChangeForm.controls['oldPassword'].value;
    const newPassword = this.passwordChangeForm.controls['newPassword'].value;
    const repeatNewPassword = this.passwordChangeForm.controls['repeatNewPassword'].value;

    if (oldPassword !== this.user.password) {
      return alert('Неверный пароль пользователя!');
    } else if (newPassword !== repeatNewPassword) {
      return alert('Пароли не совпадают!');
    } else {
      this.user.password = newPassword;//надо изменять его в fb
      return alert('Вы успешно сменили пароль!');
    }
  }

  // public onFileSelect(event: any): void {
  //   const file = event.target.files[0];
  //   this.userInfoForm.patchValue({ img: file });
  //   if (this.userInfoForm.get('img')) {
  //     this.userInfoForm.get('img')?.updateValueAndValidity();
  //   }
  // }

  public onSubmitUserInfo(): void {
    const formData: FormData = new FormData();
    formData.append('username', this.userInfoForm.get('username')?.value);
    formData.append('email', this.userInfoForm.get('email')?.value);
    formData.append('img', this.userInfoForm.get('img')?.value);
    // отправить это добро на fb

    return alert('Вы успешно изменили данные!');
  }

  public onSubmitUserPassword(): void {
    const formData: FormData = new FormData();
    // formData.append()
  }
}
