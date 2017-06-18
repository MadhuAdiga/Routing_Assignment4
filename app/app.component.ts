import { Component, OnInit, } from '@angular/core';
import { UserService }  from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserComponent } from './user.component';

@Component({
  selector: 'my-app',//selector tag
  templateUrl: 'app/app.component.html',//url to contain the html data for the selector
  
})


export class AppComponent implements OnInit { 
  myId:number;
  id: number;
  private sub: any; 
  private userData : any[];
  constructor(private _userService: UserService, private router: Router, private route: ActivatedRoute){} // Declares a private variable and assign it to the type HomeService

    ngOnInit(){
        this.userData= this._userService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
        this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
                console.log(this.id)
       // In a real app: dispatch action to load the details here.
    });
  };
  update(paramid:any){//update the id of selected cartoon on click
    this.myId=paramid;
  }
 }
