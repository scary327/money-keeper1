import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterModalService {
  private isModalOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isModalOpen$: Observable<boolean> = this.isModalOpenSubject.asObservable();

  public openRegisterModal(): void {
    this.isModalOpenSubject.next(true);
  }

  public closeRegisterModal(): void {
    this.isModalOpenSubject.next(false);
  }
}
