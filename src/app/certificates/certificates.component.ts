import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificate } from '../models/certificates/certificate.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates: Certificate[] = [];

  constructor(private certificatesService: CertificatesService) {
    this.certificatesService.getCertificates().snapshotChanges().pipe(
      map((changes: DocumentChangeAction<Certificate>[]) =>
        changes.map(c => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data() as Certificate
        }))
      )
    ).subscribe((data: Certificate[]) => {
      this.certificates = data;
      console.log('Certificates:', this.certificates);
    });
  }
}
