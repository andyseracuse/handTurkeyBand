import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {NgbDate, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { APIService } from '../services/api.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import { keys } from 'src/environments/keys';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  closeResult = '';
  expanded = false;
  location = '';
  date = '';
  requests = '';

  events: any[] = [];

  constructor(private modalService: NgbModal, public apiService: APIService) {
    this.isDisabled = this.isDisabled.bind(this);
  }

  public form = new FormGroup({
    date: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    specialRequests: new FormControl('', []),
    phone: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  public isDisabled (date: NgbDate, current: {year: number, month: number} | undefined): boolean {
    return this.isBooked(date)
  }

  public isBooked(date: NgbDate): boolean {
    let booked = false;
    const filteredEvents = this.events.filter(event => {
      if(event.summary) {
        return !event.summary.toLowerCase().includes('rehearsal')
      }
      return false
    })
    filteredEvents.forEach((el) => {
      const elDate = new Date(el.start.dateTime)
      if (date.equals(new NgbDate(elDate.getFullYear(), elDate.getMonth() + 1, elDate.getDate()))) {
        booked = true
      }
    });

    if (booked === false) {
      return false
    } else {
      return true
    }
  }

  public minDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  }

  menuClick(){
    this.expanded = !this.expanded;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  public async onSubmit() {
    emailjs.send(
      keys.serviceId, 
      keys.templateId, 
      {
        message: `Date: ${this.form.value.date.month + '-' + this.form.value.date.day + '-' + this.form.value.date.year}\nLocation: ${this.form.value.location}\nPhone: ${this.form.value.phone ? this.form.value.phone : 'no phone provided'}\nRequests: ${this.form.value.specialRequests ? this.form.value.specialRequests : 'no requests'}`,
        from_email: this.form.value.email,
        reply_to: this.form.value.email
      },
      keys.userId
    )
    this.modalService.dismissAll();
  }

  async ngOnInit() {
    await this.apiService.getEvents()
    .subscribe(res => {
      const items = res.items;
      this.events = items;
    });
  }
}