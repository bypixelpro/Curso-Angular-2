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
// Services
var cursos_service_1 = require("./cursos.service");
var cursos_guard_service_1 = require("./cursos-guard.service");
// Component
var cursos_list_component_1 = require("./cursos-list.component");
var cursos_details_component_1 = require("./cursos-details.component");
var cursos_pipe_1 = require("./cursos.pipe");
// Módule
var star_module_1 = require("../compartidos/star.module");
var appRoutes = [
    { path: 'cursos', component: cursos_list_component_1.CoursesListComponent },
    {
        path: 'curso/:id',
        canActivate: [cursos_guard_service_1.CursosGuardService],
        component: cursos_details_component_1.CursoDetalleComponent
    }
];
var CourseModule = (function () {
    function CourseModule() {
    }
    return CourseModule;
}());
CourseModule = __decorate([
    core_1.NgModule({
        declarations: [
            cursos_list_component_1.CoursesListComponent,
            cursos_details_component_1.CursoDetalleComponent,
            cursos_pipe_1.CourseFilterPipe
        ],
        imports: [
            star_module_1.SharedModule,
            router_1.RouterModule.forChild(appRoutes)
        ],
        providers: [
            cursos_service_1.CoursesService,
            cursos_guard_service_1.CursosGuardService
        ]
    })
], CourseModule);
exports.CourseModule = CourseModule;
//# sourceMappingURL=cursos.module.js.map