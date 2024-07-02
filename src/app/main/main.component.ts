import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InstrumentsService} from "../services/instruments.service";
import {Instrument} from "../models/instrument";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit{
  instruments: Instrument[] = [];
  newInstrument: Instrument = {
    name: '',
    quantity: 0
  }
  constructor(private instrumentsService: InstrumentsService) {}

  ngOnInit(){
    this.instrumentsService.getData().subscribe((data: Instrument[]) => {
      this.instruments = data;
    })
  }

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
