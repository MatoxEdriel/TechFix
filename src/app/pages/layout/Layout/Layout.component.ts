import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  imports: [RouterOutlet],
  standalone: true,
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
