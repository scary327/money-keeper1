import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginModalService {
  private isModalOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isModalOpen$: Observable<boolean> = this.isModalOpenSubject.asObservable();

  public openLoginModal(): void {
    this.isModalOpenSubject.next(true);
  }

  public closeLoginModal(): void {
    this.isModalOpenSubject.next(false);
  }
}
