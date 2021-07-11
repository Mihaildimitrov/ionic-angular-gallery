import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Начало', url: '/home', icon: 'home' },
    { title: 'Постове', url: '/feed', icon: 'wifi' },
    { title: 'Програма', url: '/program', icon: 'calendar' },
    { title: 'Галерия', url: '/gallery', icon: 'image' },
    { title: 'Меню / Ресторант', url: '/restaurant', icon: 'restaurant' },
    { title: 'Въпроси И Отговори', url: '/q&a', icon: 'help' },
    { title: 'Важно За Гостите', url: '/important', icon: 'warning' },
    { title: 'Контакти', url: '/contacts', icon: 'call' },
  ];

  constructor() {}
}
