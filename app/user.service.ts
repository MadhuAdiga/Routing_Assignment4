import { Injectable } from '@angular/core'; // Import Injectables dependencies

@Injectable() //Use Decorator @Injectable for services
export class UserService { //Export class LocationService
    
    getData(){ // Declare a function getData which returns an array of locations
    return [
            {
             id:1,
             name:"Angelica Pickles",
             email:'angie@email.com'

            },
            {
             id:2,
             name:"Scooby Doo",
             email:'doobie-doo@email.com'
            },
            {
             id:3,
             name:"Donald Duck",
             email:'don@email.com'
            },
            {
             id:4,
             name:"Mickey Mouse",
             email:'micky@email.com'
            }
            ];
    }
}