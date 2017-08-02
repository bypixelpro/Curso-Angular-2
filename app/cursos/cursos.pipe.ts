import { PipeTransform, Pipe } from '@angular/core';

import { ICourses } from './cursos.interface';

@Pipe({
    name: 'CourseFilter'
})

export class CourseFilterPipe implements PipeTransform {
    transform(value: ICourses[], filterBy: string) : ICourses[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(
            (course: ICourses) =>
                course.courseName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
                course.author.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
                course.courseCode.toLocaleLowerCase().indexOf(filterBy) !== -1) 
        : value;
    }
}