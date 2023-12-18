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
import { SidebarComponent } from './sidebar/sidebar.component';
import { SideMenuComponent } from './sidebar/side-menu/side-menu.component';
import { SideMenuItemComponent } from './sidebar/side-menu/side-menu-item/side-menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingTypeComponent } from './building-type/building-type.component';
import { BuildingTypeEditComponent } from './building-type/building-type-edit/building-type-edit.component';
import { ProfitComponent } from './profit/profit.component';
import { ProfitEditComponent } from './profit/profit-edit/profit-edit.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyEditComponent } from './currency/currency-edit/currency-edit.component';
import { MethodOfCalcComponent } from './method-of-calc/method-of-calc.component';
import { MethodOfCalcEditComponent } from './method-of-calc/method-of-calc-edit/method-of-calc-edit.component';
import { PriceTypeComponent } from './price-type/price-type.component';
import { PriceTypeEditComponent } from './price-type/price-type-edit/price-type-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    TestModelComponent,
    HomeComponent,
    HeaderComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    CityComponent,
    CompanyComponent,
    CityEditComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyNewComponent,
    SidebarComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    BuildingTypeComponent,
    BuildingTypeEditComponent,
    ProfitComponent,
    ProfitEditComponent,
    CurrencyComponent,
    CurrencyEditComponent,
    MethodOfCalcComponent,
    MethodOfCalcEditComponent,
    PriceTypeComponent,
    PriceTypeEditComponent 
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
  
  ],
 
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
