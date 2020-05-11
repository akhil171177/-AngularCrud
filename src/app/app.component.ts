import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router, NavigationError, NavigationCancel } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrud';
  EnabledLoadinfImage= true; 

  constructor( private _router: Router) {   
    this._router.events.subscribe((routerEvent: Event) => {
   

        if (routerEvent instanceof NavigationStart) {
          this.EnabledLoadinfImage = true;
        }

        if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationError ||
          routerEvent instanceof NavigationCancel) {
          this.EnabledLoadinfImage = false;
        }
       
    }
   
   )

  }
}
