import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tags page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html'
})
export class Tags {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Tags Page');
  }

}
