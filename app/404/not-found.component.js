"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotFoundComponent = (function () {
    function NotFoundComponent() {
        this.headerText = 'Error 404';
        this.notFoundMsg = 'La página que estás buscando no existe, por favor, prueba con las siguientes direcciones:';
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'not-found.component.html'
    })
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=not-found.component.js.map