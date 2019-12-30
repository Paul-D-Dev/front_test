import { Pet } from './../../shared/models/pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  listPets: Pet[] = [
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    },
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    },
    {
      id : 1,
      pseudo : 'Sullie',
      breed : 'Beagle'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
