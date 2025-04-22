import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Language } from '../models/lenguages/language.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages: Language[] = [];

  constructor(private languagesService: LanguagesService) {
    this.languagesService.getLanguages().pipe(
      map((changes: DocumentChangeAction<Language>[]) =>
        changes.map(c => ({
          id: c.payload.doc.id,
          ...(c.payload.doc.data() as Language)
        }))
      )
    ).subscribe((data: Language[]) => {
      this.languages = data;
      console.log('🔥 Lenguajes desde Firestore:', this.languages);
    });
  }
}
