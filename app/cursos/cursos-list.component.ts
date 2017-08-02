import { Component, OnInit } from '@angular/core';

import { ICourses } from './cursos.interface';
import { CoursesService } from './cursos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'cursos-list.component.html',
    styleUrls: ['cursos-list.component.css']
})

export class CoursesListComponent extends OnInit {

    pageTitle: string = 'Lista de cursos';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    courses: ICourses[];
    errorMessage: string;

    constructor(private __courseService: CoursesService) {
        super();
    }

    ngOnInit() : void {
        this.__courseService.getCourses()
        .subscribe(
            courses => this.courses = courses,
            error => this.errorMessage = <any>error
        )
    }

    toggleImage() {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Lista de cursos: ${message}`;
    }
}