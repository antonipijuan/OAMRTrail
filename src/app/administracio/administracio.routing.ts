import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminfaqsComponent } from './adminfaqs/adminfaqs.component';
import { AdminblogComponent } from './adminblog/adminblog.component';


export const AdministracioRoutes: Routes = [
  {
     path: '',
     redirectTo: 'crm',
     pathMatch: 'full'
  },
  {
     path: '',
     children: [
        {
           path: 'adminfaqs',
           component: AdminfaqsComponent
        },
        {
           path: 'adminblog',
           component : AdminblogComponent
        }
     ]
  }
];

