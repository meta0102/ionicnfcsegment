import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NFC, Ndef } from '@ionic-native/nfc';
import {TestpagePage} from "../pages/testpage/testpage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private nfc: NFC,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.nav.setRoot("HomepagePage")

      if (this.platform.is('cordova')) {
        this.nfc.addNdefListener(() => {
          console.log('successfully attached ndef listener');
        }, (err) => {
          console.log('error attaching ndef listener', err);
        }).subscribe(event => {
          this.nav.push(TestpagePage).then(res => {
            console.log('ok')
            console.log(res)
          }).catch(e => {
            console.log('error')
            console.log(e)
          })
        });
      }
    });
  }
}

