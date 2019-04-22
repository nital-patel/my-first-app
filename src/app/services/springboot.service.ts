import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../login/login.user';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {
  url = 'http://localhost:8080'
  constructor(private http: HttpClient) {

  }
  getData(user: User): Observable<User[]> {
    const data =  this.http.get<User[]>(this.url + '/user/alluser');
    console.log(data);
    return data;
  }

  addnewUser(user: User): Observable<User> {

    return this.http.post<User>(this.url + '/user/adduser', user);

  }
}





