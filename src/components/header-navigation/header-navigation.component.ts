import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export interface HeaderNavigationList {
  icon: string,
  alt: string,
  text: string
}

@Component({
  selector: 'header-navigation',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './header-navigation.component.html',
  styleUrl: './header-navigation.component.scss',
  animations: [
    trigger('headerAnimation', [
      state('default', style({ width: '96px' })),
      state('changed', style({ width: '200px' })),
      transition('default => changed', animate('200ms ease-in')),
      transition('changed => default', animate('200ms ease-out'))
    ])
  ],
  providers: [BrowserAnimationsModule]
})
export class HeaderNavigationComponent {
  logoIcon : string = "/assets/images/logo.svg";

  navigationItems: HeaderNavigationList[] = [
    { icon: "/assets/images/calendar.svg", alt: 'calendarIcon', text: 'Calendar' },
    { icon: "/assets/images/graph.svg", alt: 'graphIcon', text: 'Graphs' },
    { icon: "/assets/images/todo.svg", alt: 'todoIcon', text: 'Add Case' }
  ];

  accountInteraction: HeaderNavigationList[] = [
    { icon: "/assets/images/logOut.svg", alt: 'logOut', text: 'Log Out'},
    { icon: "/assets/images/deleteAcc.svg", alt: 'deleteAcc', text:'Delete Account'}
  ];

  isChanged = false;

  toggleChanged(): void {
    this.isChanged = !this.isChanged;
  }

}
