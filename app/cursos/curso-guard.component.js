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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CursoGuardService = (function () {
    function CursoGuardService(_router) {
        this._router = _router;
    }
    // ActivatedRouteSnapshot Nos da la ruta activa en la que nos encontramos 
    CursoGuardService.prototype.canActivate = function (route) {
        var id = +route.params.id;
        console.log(id);
        // Si no es numérico
        if (isNaN(id) || id < 1) {
            alert('El id no es válido');
            // Aquí deberíamos volver a una página especial
            this._router.navigate(['/cursos']);
            return false;
        }
        return true;
    };
    return CursoGuardService;
}());
CursoGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], CursoGuardService);
exports.CursoGuardService = CursoGuardService;
//# sourceMappingURL=curso-guard.component.js.map