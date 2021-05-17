import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cardexample',
  templateUrl: './cardexample.component.html',
  styleUrls: ['./cardexample.component.scss']
})
export class CardexampleComponent implements OnInit {

  countries: any = [];
  constructor(private paisService: PaisService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.spinnerService.getSpinner();
    this.paisService.getAllCountries().subscribe(
      res => {
        this.countries = res;
        this.spinnerService.stopSpinner();
      },
      err => {
        Swal.fire(`Opps!`, `Looks like our server it's on trouble`, `error`);
        this.spinnerService.stopSpinner();
      }
    );
  }

}
