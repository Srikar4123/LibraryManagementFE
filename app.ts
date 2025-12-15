import { Component, signal } from '@angular/core';
import { Initial } from './initial/initial';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Initial],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],


})
export class App {
  protected readonly title = signal('my-login-page');
}
