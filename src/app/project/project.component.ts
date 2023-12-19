import { Component } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  providers:[ProjectService]
})
export class ProjectComponent {

}
