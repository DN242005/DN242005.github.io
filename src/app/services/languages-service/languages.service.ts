import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Language } from '../../models/lenguages/language.model'; // o languages si cambiaste nombre
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private dbPath = '/languages';
  languagesRef: AngularFirestoreCollection<Language>;

  constructor(private db: AngularFirestore) {
    this.languagesRef = db.collection(this.dbPath);
  }

  getLanguages() {
    return this.languagesRef.snapshotChanges();
  }
}
