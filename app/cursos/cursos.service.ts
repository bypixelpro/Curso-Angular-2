import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICourses } from './cursos.interface';

@Injectable()

export class CoursesService {
    private _courseUrl = 'api/courses/course.json';
    course: ICourses;

    constructor(private _http: Http) {

    }

    getCourses() : Observable<ICourses[]> {
        return this._http.get(this._courseUrl)
        .map((response: Response) => <ICourses[]> response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    getCourse(id: number): Observable<ICourses> {
        return this.getCourses()
                .map((courses: ICourses[]) => courses.find(c => c.courseId === id));
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json() || 'Error del servidor');
    }

    
}