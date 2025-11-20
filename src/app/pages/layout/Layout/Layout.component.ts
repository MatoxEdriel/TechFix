import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "../../../modules/auth/login/login.component";

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  imports: [RouterOutlet, LoginComponent],
  standalone: true,
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
