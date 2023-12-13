import { Component, OnDestroy, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
  providers: [CityService]
})
export class CityComponent implements OnInit ,OnDestroy{

  cities: City[];
  private subscription: Subscription;
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.getCities();
    this.subscription = this.cityService.citiesChanged
      .subscribe(
        (cities: City[]) => {
          this.cities = cities;
        }
      );
  }
  onEditItem(index: number) {
    this.cityService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
