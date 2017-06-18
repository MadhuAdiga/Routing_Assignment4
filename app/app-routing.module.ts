import { NgModule } from '@angular/core'; //Import all the inbuilt metadata and user-defined components and modules
import { RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user.component';
import { AppComponent } from './app.component';

const routes : Routes = [// Declare a routes variable which contains the paths and the corresponding routed component 
    { path: 'user/:id', component: UserComponent}// Specify the three routes used in this application
]

@NgModule({
  imports:      [ RouterModule.forRoot(routes) ],
  exports:      [ RouterModule ]
})

export class AppRoutingModule {}
export const routingComponents = [AppComponent, UserComponent]//Export the 3 routed components used in this application
