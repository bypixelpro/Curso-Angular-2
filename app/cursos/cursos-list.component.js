"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var cursos_service_1 = require("./cursos.service");
var CoursesListComponent = (function (_super) {
    __extends(CoursesListComponent, _super);
    function CoursesListComponent(__courseService) {
        var _this = _super.call(this) || this;
        _this.__courseService = __courseService;
        _this.pageTitle = 'Lista de cursos';
        _this.imageWidth = 50;
        _this.imageMargin = 2;
        _this.showImage = false;
        return _this;
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.__courseService.getCourses()
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    CoursesListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    CoursesListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = "Lista de cursos: " + message;
    };
    return CoursesListComponent;
}(core_1.OnInit));
CoursesListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'cursos-list.component.html',
        styleUrls: ['cursos-list.component.css']
    }),
    __metadata("design:paramtypes", [cursos_service_1.CoursesService])
], CoursesListComponent);
exports.CoursesListComponent = CoursesListComponent;
//# sourceMappingURL=cursos-list.component.js.map