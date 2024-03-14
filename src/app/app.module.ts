import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilecomponentComponent } from './mobilecomponent/mobilecomponent.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostdataComponent } from './postdata/postdata.component';
import { ListsortcomponentComponent } from './listsortcomponent/listsortcomponent.component';
import { ReversedcomponentComponent } from './reversedcomponent/reversedcomponent.component';
import { BrandcomponentComponent } from './brandcomponent/brandcomponent.component';
import { DuplicatecomponentComponent } from './duplicatecomponent/duplicatecomponent.component';
import { AddcolumnComponent } from './addcolumn/addcolumn.component';


@NgModule({
  declarations: [
    AppComponent,
    MobilecomponentComponent,
    PostdataComponent,
    ListsortcomponentComponent,
    ReversedcomponentComponent,
    BrandcomponentComponent,
    DuplicatecomponentComponent,
    AddcolumnComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
