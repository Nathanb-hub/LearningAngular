import { Injectable } from "@angular/core";
import { AppareilModel } from "../models/appareil.model";
import {HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ApparelService{
    constructor(private http:HttpClient){}
    requestResponse:any;
    myApparels:AppareilModel[] = [{
        id:1,
        name:"television",
        price:250,
        color:"red"
      },
      {
        id:2,
        name:"pc",
        price:1250,
        color:"noir",
        provenance:"Paris"
      },
      {
        id:3,
        name:"casque",
        price:50,
        color:"bleu",
        provenance:"Marseille"
      },{
        id:4,
        name:"casque",
        price:50,
        color:"bleu",
        provenance:"Marseille"
      }
    ];
    getApparelsList(url:string):AppareilModel[] {
        this.http.get(url).subscribe((response)=>{
            console.log(response);
        });
        return this.myApparels;



    }
}