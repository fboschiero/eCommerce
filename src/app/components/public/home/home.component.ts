import { Component, OnInit, Input } from '@angular/core';
import { ArticuloService } from '../../../services/articulo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private DESDE = 0;
  private CANTIDAD = 10;

  @Input() items: any[] = [];
  constructor(private articuloService: ArticuloService ) { }

  ngOnInit(): void {
  }


}
