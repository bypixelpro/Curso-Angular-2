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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var CoursesService = (function () {
    function CoursesService(_http) {
        this._http = _http;
        this._courseUrl = 'api/courses/course.json';
    }
    CoursesService.prototype.getCourses = function () {
        return this._http.get(this._courseUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    CoursesService.prototype.getCourse = function (id) {
        return this.getCourses()
            .map(function (courses) { return courses.find(function (c) { return c.courseId === id; }); });
    };
    CoursesService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json() || 'Error del servidor');
    };
    return CoursesService;
}());
CoursesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=cursos.service.js.map