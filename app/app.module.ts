import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './user.service';
import { AppComponent }  from './app.component';
import { routingComponents }  from './app-routing.module';//Import the routing component which has the three nested and routed components defined in the app-routing module



@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, routingComponents],//declare routingComponents
  bootstrap:    [ AppComponent],
  providers :   [ UserService ]
})
export class AppModule { }

