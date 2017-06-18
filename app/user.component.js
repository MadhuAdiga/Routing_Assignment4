"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
    } // Declares a private variable and assign it to the type HomeService
    UserComponent.prototype.ngOnInit = function () {
        this.userData = this._userService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the homeData to the data fetched by the function getData in the HomeService
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserComponent.prototype, "child_id", void 0);
    UserComponent = __decorate([
        core_1.Component({
            selector: "user",
            templateUrl: 'app/user.component.html',
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map