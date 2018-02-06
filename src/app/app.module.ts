import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Ndef, NFC} from "@ionic-native/nfc";
import {TestpagePage} from "../pages/testpage/testpage";

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    TestpagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TestpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NFC,
    Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
