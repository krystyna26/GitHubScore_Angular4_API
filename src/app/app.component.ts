import { Component} from '@angular/core';
// service
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  username: string = null;
  score: number;

  constructor(private _userService: UserService) { }

  onSubmit(){
    // do logic (score) on user object (getScore())
    this._userService.getSCore(this.username).subscribe(
      (user) => {
        this.score = user.json()['public_repos'] + user.json()['followers'];
        // else return error
      },(error) =>{
        console.log(error);
      } 
    );
    // this._userService.test(this.username, (response) => {
    //   console.log(response);
    // })
  }
}
