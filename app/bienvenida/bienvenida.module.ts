import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidaComponent } from './bienvenida.component';

const appRoutesBienvenida: Routes = [
    {path: 'bienvenida', component: BienvenidaComponent},
    // Si la url está vacío
    {path: '', redirectTo:'bienvenida', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        BienvenidaComponent
    ],
    imports: [
        RouterModule.forChild(appRoutesBienvenida)
    ]
})

export class BienvenidaModule {}

