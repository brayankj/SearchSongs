import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
} from '@angular/material';

const MateriaAngular = [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
];

@NgModule({
    imports:[MateriaAngular,FormsModule,ReactiveFormsModule],
    exports: [MateriaAngular,FormsModule,ReactiveFormsModule]
})

export class MAterialModels {

}