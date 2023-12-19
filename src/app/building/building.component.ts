import { Component } from '@angular/core';
import { BuildingService } from './building.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.css',
  providers:[BuildingService]
})
export class BuildingComponent {

}
