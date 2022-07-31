import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  media: number;
  nota: string;

  constructor() {
    this.media = 0;
    this.nota = '';
   }

  ngOnInit(): void {
  }

  calculaMedia(n1:number, n2:number, n3:number, n4:number){
    this.media = (n1*2 + n2*2 + n3*3 + n4*3)/10;
    this.nota = `A nota média do aluno é:${this.media}`
  }

}
