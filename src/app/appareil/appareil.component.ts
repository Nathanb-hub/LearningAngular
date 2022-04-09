import { Component, OnInit,Input } from '@angular/core';
import { AppareilModel } from '../models/appareil.model';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareil! : AppareilModel

  ngOnInit(): void {
    
  }

}
