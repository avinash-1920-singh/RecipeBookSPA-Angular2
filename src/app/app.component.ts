import { Component ,OnInit} from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature='recipe'


  ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyDLk9n5hJv2NylB18Tmv-hhE8pgQgUEVNU",
    authDomain: "avinash-ng-http.firebaseapp.com",

  })
  }
  onNavigate(feature:string){
    this.loadedFeature=feature;

  }
}
