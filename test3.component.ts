import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DoitService } from '../doit.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  movie:FormGroup
  constructor(private fb: FormBuilder, private http: DoitService ) { 
    this.movie=this.fb.group({
      name:new FormControl(''),
      lang:new FormControl(''),
      genre:new FormControl('')      
    })
  }

  ngOnInit() {
  }
get(val){
  console.log(val);
  this.http.getdata(val).add(data=>{
    console.log("4",data)
  })
}
}
