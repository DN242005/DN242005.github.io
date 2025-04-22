import { Component } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
import { Education } from '../models/education/education.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [];

  constructor(private educationService: EducationService) {
    this.educationService.getEducation().snapshotChanges().pipe(
      map((changes: DocumentChangeAction<Education>[]) =>
        changes.map(c => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data() as Education
        }))
      )
    ).subscribe((data: Education[]) => {
      this.educationList = data;
      console.log('Educación:', this.educationList);
    });
  }
}
