import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authListenerSubs: Subscription | any;
  userIsAuthenticaed :boolean = false

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticaed = isAuthenticated
    }

    )
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe()
  }

  onLogout(){
    this.authService.logout()
  }
}
