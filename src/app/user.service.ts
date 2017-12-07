import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { 
  }

  getSCore = function(username: string){
    // take user object (json) from API
    return this._http.get(`https://api.github.com/users/${username}`);
  }

  test(username, callback){
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    )
  }
}
