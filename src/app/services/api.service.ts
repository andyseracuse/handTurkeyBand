import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { keys } from 'src/environments/keys';
import { CalendarResponse } from '../models/calendar-response';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public http: HttpClient) { }

  public getPublicEvents() {
    return this.http.get<CalendarResponse>(`https://www.googleapis.com/calendar/v3/calendars/handturkeyband@gmail.com/events?&q=public&timeMin=${new Date().toISOString()}&key=${keys.calendarKey}`);
  }
  public getEvents() {
    return this.http.get<CalendarResponse>(`https://www.googleapis.com/calendar/v3/calendars/handturkeyband@gmail.com/events?&timeMin=${new Date().toISOString()}&key=${keys.calendarKey}`);
  }
}
