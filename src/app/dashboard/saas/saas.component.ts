import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import {fadeInAnimation} from "../../core/route-animation/route.animation";

@Component({
   selector: 'ms-dashboard',
   templateUrl:'./saas-component.html',
   styleUrls: ['./saas-component.scss'],
   encapsulation: ViewEncapsulation.None,
   host: {
      "[@fadeInAnimation]": 'true'
   },
   animations: [ fadeInAnimation ]
})

export class SaasComponent implements OnInit  {

   //Manage List
   list: Object[] = [{
      title: "5 Text editor that are free",
      photo: "assets/img/post1.jpg",
      desc: "Repellendus ipsum illum optio sequi at iste. Odit molestiae, voluptatem dignissimos. Necessitatibus dolore tempora error quia minus! Esse, quidem, impedit. Delectus itaque impedit excepturi.",
      author: "Admin",
      postdate: "3 Days Ago"
   },{
      title: "Know more about To Do List",
      photo: "assets/img/post2.jpg",
      desc: "Repellendus ipsum illum optio sequi at iste. Odit molestiae, voluptatem dignissimos. Necessitatibus dolore tempora error quia minus! Esse, quidem, impedit. Delectus itaque impedit excepturi.",
      author: "Help Desk",
      postdate: "1 Days Ago"
   },{
      title: "Latest Angular Admin Themes",
      photo: "assets/img/post3.jpg",
      desc: "Repellendus ipsum illum optio sequi at iste. Odit molestiae, voluptatem dignissimos. Necessitatibus dolore tempora error quia minus! Esse, quidem, impedit. Delectus itaque impedit excepturi.",
      author: "Kenny",
      postdate: "3 Hrous Ago"
   }];

   constructor( private pageTitleService: PageTitleService) {
   }
  
   ngOnInit() {
      this.pageTitleService.setTitle("Home");
   }
}
      
