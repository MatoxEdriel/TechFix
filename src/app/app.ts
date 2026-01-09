import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./shared/components/Loader/Loader.component";
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TechFix');
}
