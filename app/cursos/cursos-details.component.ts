import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ICourses } from './cursos.interface';
import { CoursesService } from './cursos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'cursos-details.component.html'
})

export class CursoDetalleComponent extends OnInit {
    pageTitle: string = 'Product Detail';
    curso: ICourses;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, 
                private _router: Router, 
                private _courseService: CoursesService) {
        super();
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id']
                this.getCourse(id)
            }
        );
    }

    getCourse(id: number) {
        this._courseService.getCourse(id).subscribe(
            curso => this.curso = curso,
            error => this.errorMessage = <any>error
        );
    }

    onBack(): void {
        this._router.navigate(['/cursos']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Producto Detallado: ' + message;
    }

}