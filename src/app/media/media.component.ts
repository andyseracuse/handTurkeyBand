import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  active = 1;
  public images = [1, 2, 3, 4, 5, 6, 7].map((el) => `../../assets/Images/${el}.jpg`)

  constructor() { }

  ngOnInit(): void {
    
  }

}
