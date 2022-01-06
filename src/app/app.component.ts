import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'bigo';

  subscription: Subscription;
  hideSidebar: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
      this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(1, 0));
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  // for toggling the sidebar
  toggleSidebar() {
    if(this.hideSidebar == true)
    {
      this.hideSidebar = false;
    }
    else
    {
      this.hideSidebar = true;
    }
  }

  collapseSidebar() {
    this.hideSidebar = true;
  }
}
