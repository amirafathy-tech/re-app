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
import { UnitComponent } from './unit/unit.component';
import { UnitOrientationComponent } from './unit/unit-orientation/unit-orientation.component';
import { UnitFixtureComponent } from './unit/unit-fixture/unit-fixture.component';
import { UnitViewComponent } from './unit/unit-view/unit-view.component';
import { UnitStatusComponent } from './unit/unit-status/unit-status.component';
import { UnitFloorComponent } from './unit/unit-floor/unit-floor.component';
import { UnitOfMeasureComponent } from './unit/unit-of-measure/unit-of-measure.component';
import { UsageTypeComponent } from './unit/usage-type/usage-type.component';
import { UnitSubTypeComponent } from './unit/unit-sub-type/unit-sub-type.component';
import { BuildingComponent } from './building/building.component';
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'city', component: CityComponent },
  { path: 'company', component: CompanyComponent },

  { path: 'building', component: BuildingComponent},
  { path: 'building-type', component: BuildingTypeComponent },

  { path: 'project', component: ProjectComponent },
  
  { path: 'profit', component: ProfitComponent },
  { path: 'currency', component: CurrencyComponent },

  { path: 'moc', component: MethodOfCalcComponent },

  { path: 'price-type', component: PriceTypeComponent },
  
  { path: 'unit', component: UnitComponent},
  { path: 'unit-view', component: UnitViewComponent},
  { path: 'unit-status', component: UnitStatusComponent},
  { path: 'unit-floor', component: UnitFloorComponent},
  { path: 'uom', component: UnitOfMeasureComponent},
  { path: 'unit-usagetype', component: UsageTypeComponent},
  { path: 'unit-subtype', component: UnitSubTypeComponent},
  { path: 'unit-orientation', component: UnitOrientationComponent},

  { path: 'unit-fixture', component: UnitFixtureComponent},

  // {
  //   path: 'unit',
  //   component: UnitComponent,
  //   children: [
  //     { path: 'unit-orientation', component: UnitOrientationComponent},
  //     { path: 'unit-fixture', component: UnitFixtureComponent },
    
  //   ]
  // },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
