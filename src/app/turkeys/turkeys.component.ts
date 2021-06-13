import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turkeys',
  templateUrl: './turkeys.component.html',
  styleUrls: ['./turkeys.component.css']
})
export class TurkeysComponent implements OnInit {

  constructor() { }

  public bandmates = [
    {name: 'Andy Seracuse - Vocals', picturePath: '../../assets/Images/Andy.jpg', bio: 'Makes this website look oh so good. Yes that\'s why my... his name is first'},
    {name: 'Kylee Lund - Vocals', picturePath: '../../assets/Images/Kylee.jpg', bio: 'Makes sure the average height of the band doesn\'t get out of hand.'},
    {name: 'Stephen Garrison - Bass', picturePath: '../../assets/Images/Stephen.jpg', bio: 'Plays the knock off Joe Dart Bass.'},
    {name: 'Nicky Podrez - Drums', picturePath: '../../assets/Images/Nicky.jpg', bio: 'Trying to distance himself from brass instruments.'},
    {name: 'Ben Krueger - Keys', picturePath: '../../assets/Images/Ben.jpg', bio: 'Recovering from a broken hip. Shouldn\'t be allowed on a bike.'},
    {name: 'Eric Ellis - Guitar', picturePath: '../../assets/Images/Eric.jpg', bio: 'Resident Luthier (Makes literally all the string instruments.)'},
    {name: 'Noah Graf - Trumpet', picturePath: '../../assets/Images/Noah.jpg', bio: 'Trading brain cells for high notes one gig at a time.'},
    {name: 'Trevor Shuffler - Trombone', picturePath: '../../assets/Images/Trevor.jpg', bio: 'Trying to single handedly outplay the group.'},
    {name: 'Amy Keisling - Sax', picturePath: '../../assets/Images/Amy.jpg', bio: 'Pretends she doesn\'t know "Careless Whisper."'},
  ]

  ngOnInit(): void {
  }

}
