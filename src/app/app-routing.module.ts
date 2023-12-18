import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { CompanyComponent } from './company/company.component';
import { BuildingTypeComponent } from './building-type/building-type.component';
import { ProfitComponent } from './profit/profit.component';
import { CurrencyComponent } from './currency/currency.component';
import { MethodOfCalcComponent } from './method-of-calc/method-of-calc.component';
import { PriceTypeComponent } from './price-type/price-type.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'city', component: CityComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'building-type', component: BuildingTypeComponent },

  { path: 'profit', component: ProfitComponent },
  { path: 'currency', component: CurrencyComponent },

  { path: 'moc', component: MethodOfCalcComponent },

  { path: 'price-type', component: PriceTypeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
