import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  nitalSpringBootService = 'http://http://127.0.0.1:8080/user/allusers'
  constructor(private http: HttpClient) {

  }
  getData(): Observable<Test[]> {
    const data =  this.http.get<Test[]>(this.nitalSpringBootService);
    console.log(data);
    return data;
  }

}

export class Test {
  id: string;
  username: string;
  password: string;
  emailid: string;
}
