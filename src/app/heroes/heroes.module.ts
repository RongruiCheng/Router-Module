import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
