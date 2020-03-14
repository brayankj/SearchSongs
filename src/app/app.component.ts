import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'searchsongs';

  constructor (){
    
  }

  ngOnInit() {
    Swal.fire({
      title: 'Search Songs',
      text: 'Consumo de Rest-Api con Angular',
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      }
    })
  }

}
