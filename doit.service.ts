import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoitService {
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

  constructor(private http: HttpClient) { }
  registerUser(value) {
    let body = {
      name: value.uname,
      password: value.pwd,
      confirmpassword: value.conpwd
    }
     //this.http.get('https://example.com/api/items').pipe(map(data => { })).subscribe(result => {
      // console.log(result);
     //});
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users', body,this.httpOptions).pipe(map(data => { console.log("1", data)})).subscribe(result => {
      
    })
  }
  login(value){
    let body={
      name:value.uname,
      pass:value.pwd
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate', body,this.httpOptions).pipe(map(data => { 
      
      localStorage.setItem("logindata", JSON.stringify(data))
      console.log("3",data)
    })).subscribe(result => {})
    
  }

  getdata(value){
    let body={
      id:JSON.parse(localStorage.getItem("logindata")).success._id,
      MovieName:value.name,
      Language:value.lang,
      Genre:value.genre
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies', body,this.httpOptions).pipe(map(data => { 
      console.log("3",data)
    })).subscribe(result => {})
}
}
