import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header!: Header;

  constructor(public headerService: HeaderService) {
    this.headerService.getHeader().snapshotChanges().pipe(
      map((changes: DocumentChangeAction<Header>[]) =>
        changes.map((c: DocumentChangeAction<Header>) => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data() as Header
        }))
      )
    ).subscribe((data: Header[]) => {
      this.header = data[0];
      console.log(this.header);
    });
  }

getSocialIcon(url: string): string {
    if (url.includes('github')) return 'https://cdn-icons-png.flaticon.com/512/733/733553.png';
    if (url.includes('facebook')) return 'https://cdn-icons-png.flaticon.com/512/733/733547.png';
    if (url.includes('instagram')) return 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png';
    return 'https://cdn-icons-png.flaticon.com/512/25/25694.png'; // ícono genérico
  }

  getSocialName(url: string): string {
    if (url.includes('github')) return 'GitHub';
    if (url.includes('facebook')) return 'Facebook';
    if (url.includes('instagram')) return 'Instagram';
    return 'la red social';
  }
}
