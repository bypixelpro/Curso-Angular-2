import{ Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CoursesService } from './cursos.service';

@Injectable()

export class CursosGuardService implements CanActivate {

    errorMessage: string;

    constructor(
        private _router: Router,
        private _http: Http,
        private _courseService: CoursesService
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot) : boolean {
        let id = +route.params.id;
        let observableCourse = this._courseService.getCourse(id);
        observableCourse.subscribe(
            (curso) => {
                if(typeof curso === 'undefined') {
                    alert('No existe ningún curso con esa id');
                    this._router.navigate(['/no-encontrado']);
                    return false;
                }
            },
            error => this.handleError = error
        );
        return true;
    }

    private handleError(error: Response) {
        return Observable.throw(error.json || 'Error del servidor');
    }

}