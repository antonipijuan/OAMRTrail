import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';


@Injectable({
	providedIn: 'root'
})

export class CoreService {
	
	collapseSidebar: boolean = false;
	collapseSidebarStatus: boolean;
	sidenavMode: string  = 'side';
	sidenavOpen: boolean = true;
	horizontalSideNavMode: string  = 'over';
	horizontalSideNavOpen: boolean = false;
	projectDetailsContent: any;
	editProductData: any;

	constructor(private matDialog : MatDialog,
				private http : HttpClient){
	}


// getResponsiveTableContent method is used to get the responsive table data from json file
    getResponsiveTableContent() {
 return this.http.get('assets/data/responsive_table.json').pipe(map(response => response));
}

// getResponsiveTableContent method is used to get the user management grid list data from json file
}