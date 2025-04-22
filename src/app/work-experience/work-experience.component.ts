import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperienceList: WorkExperience[] = [];

  constructor(private workExperienceService: WorkExperienceService) {
    this.workExperienceService.getWorkExperience().subscribe((data: WorkExperience[]) => {
      this.workExperienceList = data;
      console.log('Experiencias recibidas:', this.workExperienceList);
    });
  }
}
