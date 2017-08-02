"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bienvenida_component_1 = require("./bienvenida.component");
var appRoutesBienvenida = [
    { path: 'bienvenida', component: bienvenida_component_1.BienvenidaComponent },
    // Si la url está vacío
    { path: '', redirectTo: 'bienvenida', pathMatch: 'full' }
];
var BienvenidaModule = (function () {
    function BienvenidaModule() {
    }
    return BienvenidaModule;
}());
BienvenidaModule = __decorate([
    core_1.NgModule({
        declarations: [
            bienvenida_component_1.BienvenidaComponent
        ],
        imports: [
            router_1.RouterModule.forChild(appRoutesBienvenida)
        ]
    })
], BienvenidaModule);
exports.BienvenidaModule = BienvenidaModule;
//# sourceMappingURL=bienvenida.module.js.map