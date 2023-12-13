import { Injectable } from '@angular/core';

import { City } from './city.model';
import { Subject } from 'rxjs';

@Injectable()
export class CityService {
  citiesChanged = new Subject<City[]>();
  startedEditing = new Subject<number>();

  private cities: City[] = [
    new City(
      'City 1',
      'City 1 Desc'),
      new City(
        'City 2',
        'City 2 Desc'),
        new City(
            'City 3',
            'City 3 Desc'),
  ];


  getCities() {
    return this.cities.slice();
  }

  getCity(index: number) {
    return this.cities[index];
  }
 

  addCity(city: City) {
    this.cities.push(city);
    this.citiesChanged.next(this.cities.slice());
  }

  addCities(cities: City[]) {
    this.cities.push(...cities);
    this.citiesChanged.next(this.cities.slice());
  }
  updateCity(index: number, newCity: City) {
    this.cities[index] = newCity;
    this.citiesChanged.next(this.cities.slice());
  }

  deleteCity(index: number) {
    this.cities.splice(index, 1);
    this.citiesChanged.next(this.cities.slice());
  }


}
