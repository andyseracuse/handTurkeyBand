import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { keys } from 'src/environments/keys';
import { Observable } from 'rxjs';
import { CalendarResponse } from '../models/calendar-response';
import { APIService } from '../services/api.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(public apiService: APIService) {}
  active = 1;
  events: any[] = [];
  rep = [
    {
      "Title": "Frogville",
      "Artist": "Cory Wong"
    },
    {
      "Title": "Dial Up",
      "Artist": "Corey Wong"
    },
    {
      "Title": "Beastly",
      "Artist": "Vulfpeck"
    },
    {
      "Title": "Disco Ulysses",
      "Artist": "Vulfpeck"
    },
    {
      "Title": "Running Away",
      "Artist": "Vulfpeck"
    },
    {
      "Title": "It Gets Funkier",
      "Artist": "Vulfpeck"
    },
    {
      "Title": "Darwin Derby",
      "Artist": "Vulfpeck"
    },
    {
      "Title": "Celebrate",
      "Artist": "Anderson Paak"
    },
    {
      "Title": "Virtual insanity",
      "Artist": "Jamiroquai"
    },
    {
      "Title": "Honey Bee",
      "Artist": "Hand Turkey"
    },
    {
      "Title": "Lost at Sea",
      "Artist": "Hand Turkey"
    },
    {
      "Title": "Mind Reader",
      "Artist": "Hand Turkey"
    },
    {
      "Title": "Imposter",
      "Artist": "Hand Turkey"
    },
    {
      "Title": "I Want You Back",
      "Artist": "Jackson 5"
    },
    {
      "Title": "I Wish",
      "Artist": "Stevie Wonder"
    },
    {
      "Title": "Master Blaster",
      "Artist": "Stevie Wonder"
    },
    {
      "Title": "Isn't She Lovely",
      "Artist": "Stevie Wonder"
    },
    {
      "Title": "Sing a Song",
      "Artist": "Earth Wind and Fire"
    },
    {
      "Title": "Let's Groove",
      "Artist": "Earth Wind and Fire"
    },
    {
      "Title": "September",
      "Artist": "Earth Wind and Fire"
    },
    {
      "Title": "Oh What a Night",
      "Artist": "The Four Seasons"
    },
    {
      "Title": "Billie Jean",
      "Artist": "Michael Jackson"
    },
    {
      "Title": "Brown Eyed Girl",
      "Artist": "Van Morrison"
    },
    {
      "Title": "Ain't No Mountain",
      "Artist": "Marvin Gaye"
    },
    {
      "Title": "Uptown Funk",
      "Artist": "Mark Ronson"
    },
    {
      "Title": "Valerie",
      "Artist": "Mark Ronson"
    },
    {
      "Title": "Sweet Caroline",
      "Artist": "Niel Diamond"
    },
    {
      "Title": "Beginnings",
      "Artist": "Chicago"
    },
    {
      "Title": "Shout",
      "Artist": "Isley Brothers"
    },
    {
      "Title": "Waterfalls",
      "Artist": "TLC"
    },
    {
      "Title": "24K Magic",
      "Artist": "Bruno Mars"
    },
    {
      "Title": "Flesh and Bone",
      "Artist": "Sammi Rae & the Friends"
    },
  ];

  getMonth(dateString: string) {
    const options = { month: 'long'};
    return new Intl.DateTimeFormat('en-US', options).format(Date.parse(dateString));
  }

  getTimes(dateString: string) {
    const date = new Date(dateString);
    const timeString = date.toLocaleTimeString('en-US')

    return timeString.substring(0, 4) + timeString.substring(timeString.length - 2, timeString.length);
  }

  getDay(dateString: string) {
    return dateString.substring(8, 10);
  }

  getDayOfWeek(dateString: string) {
    const options = { weekday: 'long'};
    return new Intl.DateTimeFormat('en-US', options).format(Date.parse(dateString));
  }

  getEvents() {
    // tslint:disable-next-line:max-line-length
    return this.apiService.getPublicEvents();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  async ngOnInit(){
    await this.getEvents()
    .subscribe(res => {
      debugger
      const items = res.items;
      this.events = items.sort((a, b) =>  new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime());
    });
    console.log(this.events);
  }
}
