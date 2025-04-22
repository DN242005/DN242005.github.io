import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
import { Interest } from '../models/interests/interest.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests: Interest[] = [];

  constructor(private interestsService: InterestsService) {
    this.interestsService.getInterests().snapshotChanges().pipe(
      map((changes: DocumentChangeAction<Interest>[]) =>
        changes.map(c => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data() as Interest
        }))
      )
    ).subscribe((data: Interest[]) => {
      this.interests = data;
      console.log('Interests:', this.interests);
    });
  }
}
