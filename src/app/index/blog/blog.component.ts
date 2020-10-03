import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/webservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  fData: any;
  fNewsData: any;

  constructor(private service: WebserviceService) { }

  ngOnInit(): void {
    this.service.fetchLatestNews().subscribe(res=>{
      this.fData = res;
       this.fNewsData = this.fData.articles;
      console.log(res);
    })
  }
  }
