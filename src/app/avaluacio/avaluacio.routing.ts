import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tema1Component } from './tema1/tema1.component';

export const AvaluacioRoutes: Routes = [
  {
     path: '',
     redirectTo: 'crm',
     pathMatch: 'full'
  },
  {
     path: '',
     children: [
        {
           path: 'tema1',
           component: Tema1Component
        },
        {
           path: "tema2",
           component : Tema1Component
        }
     ]
  }
];
