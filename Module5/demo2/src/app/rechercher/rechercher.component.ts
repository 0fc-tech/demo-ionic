import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../models/film';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.scss'],
  imports: [FormsModule,CommonModule, IonicModule],
})
export class RechercherComponent  implements OnInit {
  public binding : string = "Hello World";
  
  public title: string = '';
  public year?: number;
  public type: string = '';
  public error: string = '';

  constructor() { }

  ngOnInit() {}

  public films: Array<Film> = []
  public isAlertOpen = false;
  public alertButtons = ['OK'];

  public activerAlerte(open: boolean) {
    this.isAlertOpen = open;
  }

  public rechercher(){
    this.error = '';
    if (!this.title || this.title.length <= 3) {
      this.error = 'Veuillez saisir un titre de plus de 3 caractères';
      this.activerAlerte(true);
      return;
    }
    if (this.year && (this.year < 1900 || this.year > 2050)) {
      this.error = 'Veuillez saisir une année entre 1900 et 2050';
      this.activerAlerte(true);
      return;
    }
    this.lancerRecherche();
  }

  private lancerRecherche(){
    this.films = [
      {
        Title: 'Film 1',
        Poster: 'assets/icon/favicon.png',
        Year: 1998
      },
      {
        Title: 'Film 2',
        Poster: 'assets/icon/favicon.png',
        Year: 2012
      },
      {
        Title: 'Film 3',
        Poster: 'assets/icon/favicon.png',
        Year: 1958
      },

    ]
  }

}
