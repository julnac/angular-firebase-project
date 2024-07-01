import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InstrumentsService} from "../services/instruments.service";
import {Instrument} from "../models/instrument";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  newInstrument: Instrument = {
    name: '',
    quantity: 0
  }
  constructor(private instrumentsService: InstrumentsService) {}

  onSubmit(){
    this.instrumentsService.saveData(this.newInstrument);
    //przywracanie do pustego stanu
    this.newInstrument = {
      name: '',
      quantity: 0
    }
  }
  // protected readonly onsubmit = onsubmit;
}
