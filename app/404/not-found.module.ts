import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const appRoutes = [
    {path: 'no-encontrada', component: NotFoundComponent},
    {path: '**', redirectTo: 'no-encontrada', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes)
    ]
})

export class NotFoundModule {}