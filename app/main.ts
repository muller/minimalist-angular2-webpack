
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { BrowserModule          } from '@angular/platform-browser';
import { Component, NgModule    } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    template: '<h1>minimalist-angular{{1+1}}-webpack</h1>'
})
class AppComponent { }

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
