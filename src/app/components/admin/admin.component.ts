import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  ngOnInit() {
  	console.log(this.router.params);
	this.router.params.subscribe( params => {
		let id = 0;
		if(params['id']) 
			id = params['id'].toString();
	});
  }

}
