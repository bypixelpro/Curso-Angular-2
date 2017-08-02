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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var cursos_service_1 = require("./cursos.service");
var CursosGuardService = (function () {
    function CursosGuardService(_router, _http, _courseService) {
        this._router = _router;
        this._http = _http;
        this._courseService = _courseService;
    }
    CursosGuardService.prototype.canActivate = function (route) {
        var _this = this;
        var id = +route.params.id;
        var observableCourse = this._courseService.getCourse(id);
        observableCourse.subscribe(function (curso) {
            if (typeof curso === 'undefined') {
                alert('No existe ningún curso con esa id');
                _this._router.navigate(['/no-encontrado']);
                return false;
            }
        }, function (error) { return _this.handleError = error; });
        return true;
    };
    CursosGuardService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json || 'Error del servidor');
    };
    return CursosGuardService;
}());
CursosGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        cursos_service_1.CoursesService])
], CursosGuardService);
exports.CursosGuardService = CursosGuardService;
//# sourceMappingURL=cursos-guard.service.js.map