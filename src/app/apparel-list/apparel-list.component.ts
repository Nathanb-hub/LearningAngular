import { Component, OnInit } from '@angular/core';
import { AppareilModel } from '../models/appareil.model';
import { ApparelService } from '../services/apparel.service';

@Component({
  selector: 'app-apparel-list',
  templateUrl: './apparel-list.component.html',
  styleUrls: ['./apparel-list.component.css']
})
export class ApparelListComponent implements OnInit {

  myApparels! : AppareilModel[];
  

  constructor(private apparelService:ApparelService){

  }
  ngOnInit(): void {
    this.myApparels = this.apparelService.getApparelsList('https://jsonplaceholder.typicode.com/todos/1');
  }

}
