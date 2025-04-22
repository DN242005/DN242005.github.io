import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { WorkExperience } from '../../models/work-experience/work-experience.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private dbPath = '/work-experience';

  constructor(private db: AngularFirestore) {}

  getWorkExperience(): Observable<WorkExperience[]> {
    return this.db.collection<WorkExperience>(this.dbPath).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data()
        }))
      )
    );
  }
}
