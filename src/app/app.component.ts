import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnosArray:Alumno[]=[
    {id: 1,nombre:'Miguel Ángel',grado:'5',edad:'20'},
    {id: 2,nombre:'Alejandro Dennis',grado:'5',edad:'21'},
    {id: 3,nombre:'Alex',grado:'9',edad:'18'},
    {id: 4,nombre:'David',grado:'7',edad:'22'},
    {id: 5,nombre:'Sofía',grado:'9',edad:'18'},
  ]

  seleAlumno:Alumno=new Alumno();

  addOrEdit(){
    if(this.seleAlumno.id === 0) {
      this.seleAlumno.id=this.alumnosArray.length+1;
      this.alumnosArray.push(this.seleAlumno);
    }
    this.seleAlumno = new Alumno();
  }
  openForEdit(alumnito : Alumno){
    this.seleAlumno=alumnito;
  }
  delete(){
    if(confirm('¿Deseas realmente eliminar este registro?')){
      this.alumnosArray=this.alumnosArray.filter(x => x != this.seleAlumno);
      this.seleAlumno=new Alumno();
    }
  }
}
