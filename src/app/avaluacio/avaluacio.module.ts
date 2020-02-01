import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatIconModule,
  MatSlideToggleModule,
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
			MatSelectModule,
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
      MatGridListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WidgetComponentModule } from '../widget-component/widget-component.module';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MenuToggleModule } from 'app/core/menu/menu-toggle.module';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//  import { RoutingModule } from 'app/app-routing.module';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HttpLoaderFactory } from 'app/app.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = {
	apiKey: 'AIzaSyA0ITnfwvPqGeheLI7qRMzgEVmgR-apXUk',
    authDomain: 'aevilasana-adc79.firebaseapp.com',
    databaseURL: 'https://aevilasana-adc79.firebaseio.com',
    projectId: 'aevilasana-adc79',
    storageBucket: 'aevilasana-adc79.appspot.com',
    messagingSenderId: '425909937039',
    appId: '1:425909937039:web:b749efbdf096dc6528a1fa'
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
 suppressScrollX: true
};

import { AvaluacioRoutes } from './avaluacio.routing';
import { Tema1Component } from './tema1/tema1.component';


@NgModule({
  declarations: [Tema1Component],
  imports: [
	  CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		NgbModalModule.forRoot(),
		Ng5BreadcrumbModule.forRoot(),
		TourMatMenuModule.forRoot(),
		PerfectScrollbarModule,
		MenuToggleModule,
      HttpClientModule,
      MatSlideToggleModule,
		TranslateModule.forRoot({
         loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
         }
      }),
		AngularFireModule.initializeApp(firebaseConfig),
	AngularFireAuthModule,
	AngularFirestoreModule, // imports firebase/firestore, only needed for database features

    ChartsModule,
		MatButtonModule, 
		MatCardModule, 
		MatMenuModule, 
		MatToolbarModule, 
		MatIconModule, 
		MatBadgeModule,
		MatInputModule, 
		MatDatepickerModule, 
		MatNativeDateModule, 
		MatProgressSpinnerModule,
		MatTableModule, 
		MatExpansionModule, 
		MatSelectModule, 
		MatSnackBarModule, 
		MatTooltipModule, 
		MatChipsModule, 
		MatListModule, 
		MatSidenavModule, 
		MatTabsModule, 
		MatProgressBarModule,
		MatCheckboxModule,
		MatSliderModule,
		MatRadioModule,
		MatDialogModule,
		MatGridListModule,
		ToastrModule.forRoot(),
		WidgetComponentModule,
		LoadingBarRouterModule,
    RouterModule.forChild(AvaluacioRoutes)
  ]
})
export class AvaluacioModule { }
