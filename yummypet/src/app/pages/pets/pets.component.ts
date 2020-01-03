import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Pet } from '../../shared/models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  getPets = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPets().subscribe((data) => {
      this.getPets = data.collection;
    });

  }

  getNewPet(pet: Pet): any {
    this.getPets.push({...pet});
  }
}
