import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})

export class CrmComponent implements OnInit {
	showCount 		= 12;
	increaseListBy = 12;

	faqList: Observable<any[]>;
	nombre = 10;

	xfaqList : any = [
		{
			heading : "Everything You Need To Know About",
			content : "Dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl lorem ipsum."
		},
		{
			heading : "Five Explanation On Why Is Important",
			content : "Nunc molestie lorem ipsum dolor sit amet, consectetur adipiscing elit. urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Five Things That You Never Expect On",
			content : "Urna nec hendrerit scelerisque, libero felis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "The Biggest Contribution Of To Humanity.",
			content : "Nullam non dictum turpis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Will Make You Tons Of Cash. Here's How!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Is How Will Look Like In 10 Years Time",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Learn From These Mistakes Before You Learn",
			content : "Urna nec hendrerit scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Story Behind Will Haunt You Forever!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Is Any Good? 10 Ways You Can Be Certain",
			content : "Odio quis scelerisque dictum lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, felis ligula auctor ex, eu consequat ex nulla eget."
		},
		{
			heading : "7 Preparations You Should Make Before Using",
			content : "Libero felis tempor nibh, ut auctor ligula ex quis quam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget."
		},
		{
			heading : "Everything You Need To Know About",
			content : "Dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl lorem ipsum."
		},
		{
			heading : "Five Explanation On Why Is Important",
			content : "Nunc molestie lorem ipsum dolor sit amet, consectetur adipiscing elit. urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Five Things That You Never Expect On",
			content : "Urna nec hendrerit scelerisque, libero felis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "The Biggest Contribution Of To Humanity",
			content : "Nullam non dictum turpis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Will Make You Tons Of Cash. Here's How!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Is How Will Look Like In 10 Years Time",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Learn From These Mistakes Before You Learn",
			content : "Urna nec hendrerit scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Story Behind Will Haunt You Forever!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Is Any Good? 10 Ways You Can Be Certain",
			content : "Odio quis scelerisque dictum lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "7 Preparations You Should Make Before Using",
			content : "Libero felis tempor nibh, ut auctor ligula ex quis quam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Everything You Need To Know About",
			content : "Dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl lorem ipsum."
		},
		{
			heading : "Five Explanation On Why Is Important",
			content : "Nunc molestie lorem ipsum dolor sit amet, consectetur adipiscing elit. urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Five Things That You Never Expect On",
			content : "Urna nec hendrerit scelerisque, libero felis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "The Biggest Contribution Of To Humanity",
			content : "Nullam non dictum turpis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Will Make You Tons Of Cash. Here's How!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Is How Will Look Like In 10 Years Time",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Learn From These Mistakes Before You Learn",
			content : "Urna nec hendrerit scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Story Behind Will Haunt You Forever!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Is Any Good? 10 Ways You Can Be Certain",
			content : "Odio quis scelerisque dictum lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "7 Preparations You Should Make Before Using",
			content : "Libero felis tempor nibh, ut auctor ligula ex quis quam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Everything You Need To Know About",
			content : "Dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl lorem ipsum."
		},
		{
			heading : "Five Explanation On Why Is Important",
			content : "Nunc molestie lorem ipsum dolor sit amet, consectetur adipiscing elit. urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Five Things That You Never Expect On",
			content : "Urna nec hendrerit scelerisque, libero felis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "The Biggest Contribution Of To Humanity",
			content : "Nullam non dictum turpis lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Will Make You Tons Of Cash. Here's How!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Is How Will Look Like In 10 Years Time",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Learn From These Mistakes Before You Learn",
			content : "Urna nec hendrerit scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "This Story Behind Will Haunt You Forever!",
			content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "Is Any Good? 10 Ways You Can Be Certain",
			content : "Odio quis scelerisque dictum lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, libero felis tempor nibh, ut auctor ligula ex quis quam. Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		},
		{
			heading : "7 Preparations You Should Make Before Using",
			content : "Libero felis tempor nibh, ut auctor ligula ex quis quam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, urna nec hendrerit scelerisque, Nullam non dictum turpis. Phasellus sagittis tortor non sapien sodales interdum.Praesent commodo, odio quis scelerisque dictum, felis ligula auctor ex, eu consequat ex nulla eget nisl."
		}
	]
   constructor(private pageTitleService: PageTitleService,
	db: AngularFirestore) {
		this.faqList = db.collection('faqs').valueChanges();
		console.log(this.faqList);
	 }

   ngOnInit() {
      this.pageTitleService.setTitle("CRM");
   }

}
