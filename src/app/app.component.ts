import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Каталог фильмов JSExpert';

  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная' },
    { path: '/filmList', icon: 'videocam', label: 'Все фильмы' },
    { path: '/profile', icon: 'person', label: 'Профиль' }
  ];
}
