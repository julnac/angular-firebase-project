import { Injectable } from '@angular/core';
import {Instrument} from "../models/instrument";
import {Firestore, collection, addDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor( private firestore: Firestore) { }

  saveData(data: Instrument){
    const collectionInstance = collection(this.firestore, 'instruments')
    addDoc(collectionInstance, data)
      .then(()=>{
        console.log("Data saved successfully");
        console.log(data);
      }).catch((error)=>{
      console.log("Error", error);
      })
  }
}
