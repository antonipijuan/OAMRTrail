import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../service/core/core.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-adminfaqs',
  templateUrl: './adminfaqs.component.html',
  styleUrls: ['./adminfaqs.component.scss']
})


export class AdminfaqsComponent implements OnInit {

  responsiveTable : any;
  vfaqs: Observable<any[]>;

   constructor(private pageTitleService: PageTitleService,
               private translate : TranslateService,
               public service : CoreService,
               db: AngularFirestore) {

                this.vfaqs = db.collection('faqs').valueChanges();
               }

   ngOnInit() {
      
      this.pageTitleService.setTitle('Responsive');

      this.service.getResponsiveTableContent().
         subscribe( res => { this.responsiveTable = res },
                    err => console.log(err),
                    ()  => this.responsiveTable  )
   }

}
