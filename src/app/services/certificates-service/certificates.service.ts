import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificate } from '../../models/certificates/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private dbPath = '/certificates';
  certificatesRef: AngularFirestoreCollection<Certificate>;

  constructor(private db: AngularFirestore) {
    this.certificatesRef = db.collection<Certificate>(this.dbPath);
  }

  getCertificates(): AngularFirestoreCollection<Certificate> {
    return this.certificatesRef;
  }
}
