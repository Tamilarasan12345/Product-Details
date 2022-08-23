import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule
  ]
})
export class AboutModule { }
