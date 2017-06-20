import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from './app.component';
import { UserService }  from './user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector:`user`,//selector tag
  templateUrl: 'app/user.component.html',  //url to contain the html data for the selector
  providers:[AppComponent]
})


export class UserComponent implements OnInit {   
  @Input() child_id:any;//Receive the updated id from appcomponent
  private userData : any[];
  constructor(private _userService: UserService){} // Declares a private variable and assign it to the type HomeService

    ngOnInit(){
        this.userData= this._userService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the userData to the data fetched by the function getData in the UserService
        
  };

}