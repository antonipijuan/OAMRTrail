import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { 
	
	MatIconModule,
			MatButtonModule,
			MatTabsModule,
			MatCardModule,
			MatMenuModule,
			MatCheckboxModule,
			MatDividerModule,
			MatProgressBarModule,
         MatInputModule,      
			MatFormFieldModule,
			MatTableModule,
			MatListModule, 
			MatPaginatorModule,
			MatChipsModule,
			MatSortModule,
			MatToolbarModule,
      MatBadgeModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressSpinnerModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatTooltipModule,
      MatSidenavModule,
      MatSliderModule,
      MatRadioModule,
	  MatDialogModule,
	  MatGridListModule,
			MatSelectModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { DashboardRoutes } from './dashboard.routing';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WidgetComponentModule } from '../widget-component/widget-component.module';
import { SaasComponent } from './saas/saas.component';
import { CrmComponent } from './crm/crm.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
export const firebaseConfig = {
	apiKey: 'AIzaSyA0ITnfwvPqGeheLI7qRMzgEVmgR-apXUk',
    authDomain: 'aevilasana-adc79.firebaseapp.com',
    databaseURL: 'https://aevilasana-adc79.firebaseio.com',
    projectId: 'aevilasana-adc79',
    storageBucket: 'aevilasana-adc79.appspot.com',
    messagingSenderId: '425909937039',
    appId: '1:425909937039:web:b749efbdf096dc6528a1fa'
}

@NgModule({
	declarations: [
		SaasComponent,
		CrmComponent
	],
	imports: [
		CommonModule,
		MatTableModule,
		MatSelectModule,
		FlexLayoutModule,
		WidgetComponentModule,
		EasyPieChartModule,
		MatPaginatorModule,
		MatChipsModule,
      TranslateModule,
      PerfectScrollbarModule,
		RouterModule.forChild(DashboardRoutes),
		MatIconModule,
		MatButtonModule,
		MatTabsModule,
		MatCardModule,
		MatMenuModule,
		MatListModule,
		MatCheckboxModule,
		MatDividerModule,
		MatToolbarModule,
      MatBadgeModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressSpinnerModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatTooltipModule,
      MatSidenavModule,
      MatSliderModule,
      MatRadioModule,
	  MatDialogModule,
	  MatGridListModule,
		ChartsModule,
		NgxDatatableModule,
		MatProgressBarModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatSortModule,
		WidgetComponentModule,
		AngularFireModule.initializeApp(firebaseConfig),
	AngularFireAuthModule,
	AngularFirestoreModule,
	WidgetComponentModule,
		AgmCoreModule.forRoot({apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'})
	]
})
export class DashboardModule { }
