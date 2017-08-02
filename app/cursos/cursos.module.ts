import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { CoursesService } from './cursos.service';
import { CursosGuardService } from './cursos-guard.service';
// Component
import { CoursesListComponent } from './cursos-list.component';
import { CursoDetalleComponent } from './cursos-details.component';
import { CourseFilterPipe } from './cursos.pipe';
// Módule
import { SharedModule } from '../compartidos/star.module';

const appRoutes: Routes = [
    {path: 'cursos', component: CoursesListComponent},
    {
        path: 'curso/:id', 
        canActivate: [CursosGuardService], 
        component: CursoDetalleComponent
    }
];

@NgModule({
    declarations: [
        CoursesListComponent,
        CursoDetalleComponent,
        CourseFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(appRoutes)
    ],
    providers: [
        CoursesService,
        CursosGuardService
    ]
})

export class CourseModule {}