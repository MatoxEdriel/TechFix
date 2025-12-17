import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../component/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-Layout-login',
  templateUrl: './Layout-login.component.html',
  imports: [RouterOutlet],
  standalone: true,
})
export class LayoutLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
