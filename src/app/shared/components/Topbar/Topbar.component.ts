import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../modules/authentication/services/auth.service';

@Component({
  selector: 'app-Topbar',
  templateUrl: './Topbar.component.html',
  imports: [CommonModule],
  standalone: true
})
export class TopbarComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<void>();


  isProfileMenuOpen = false;
  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  logout() {

    this.authService.logOut()
  }

}
