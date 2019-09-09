import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DoitService } from '../doit.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
logins:FormGroup
  constructor(private http:DoitService,private fb:FormBuilder) { 
    this.logins=this.fb.group({
      uname:new FormControl(''),
      pwd:new FormControl('') 
    })
  }

  ngOnInit() {
  }
  login1(b){
    console.log(b)
    this.http.login(b).add(data=>{
      console.log("2",data)
    })


  }

}
