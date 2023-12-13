import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModelComponent } from './test-model/test-model.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CityComponent } from './city/city.component';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from './shared/shared.module';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyItemComponent } from './company/company-list/company-item/company-item.component';
import { CompanyNewComponent } from './company/company-new/company-new.component';



@NgModule({
  declarations: [
    AppComponent,
    TestModelComponent,
    HomeComponent,
    HeaderComponent,
    CityComponent,
    CompanyComponent,
    CityEditComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
 
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
