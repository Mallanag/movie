import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DoitService } from '../doit.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  login:FormGroup

  constructor( private fb: FormBuilder, private http: DoitService) { 
    this.login=this.fb.group({
      uname:new FormControl(''),
      pwd:new FormControl(''),
      conpwd:new FormControl('') 
    })
  }

  ngOnInit() {
  }
  register(value) {
    console.log(value)
    this.http.registerUser(value).add(data => {
      console.log("2", data)
    })
  }


}
