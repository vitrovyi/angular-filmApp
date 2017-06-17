import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmName: string;
  filmList: Object[] = [];

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.filmName = 'toy';
    this.getFilms();
  }

  private getFilms(){
    if(!this.filmName) {return;}
    this.filmService.getFilms(this.filmName).subscribe(data => {
      console.log(data);
      this.filmList = data;
    })
  }

}
