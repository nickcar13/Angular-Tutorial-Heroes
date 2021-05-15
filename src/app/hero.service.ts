import { Injectable } from '@angular/core';
import { HEROES } from './mook-heroes';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroSevice: fetched heroes');
    return heroes;
  }
}
