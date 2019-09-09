import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  list:any;
  search

  constructor(public http:HttpClient) { }

  ngOnInit() {
    let headers = { 'id': JSON.parse(localStorage.getItem('logindata')).success._id }
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+ headers.id).subscribe(
      dat=>{this.list=dat['success'].movies})
   
  }


}
