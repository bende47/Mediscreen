import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediscreensService } from 'src/app/services/mediscreens.service';
import { History } from '../../model/history';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-detailhistorique',
  templateUrl: './detailhistorique.component.html',
  styleUrls: ['./detailhistorique.component.css']
})
export class DetailhistoriqueComponent implements OnInit {

  idPatient:any;
  donnees:any;
  x:any;
  p: number = 1;
  history: History=new History();
  mod: any;
  idhistory:any;
  name:any;
  firstname:any;
  birthday:any;
  phone:any;
  address:any;
  patient : Patient = new Patient();
  donneesRapport:any;
  risque:any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private mediscreensService: MediscreensService,
  ) { }

  ngOnInit() {
    this.idPatient = this.activatedRoute.snapshot.params["id"];
    this.listHistoriquePatient();  
    this.getPatient();
  }

  listHistoriquePatient(){
    this.mediscreensService.listHistoriquePatient(this.idPatient)
    .subscribe(data => {
      this.donnees = data;
      this.x = this.donnees.length;
    },
    error => {
      console.log(error);
    });
  }

  getPatient(){
    this.mediscreensService.getPatient(this.idPatient)
      .subscribe(data => {
        this.patient = data;
        this.name = this.patient.name;
        this.firstname = this.patient.firstname;
        this.birthday = this.patient.birthday;
        this.phone = this.patient.phone;
        this.address = this.patient.address;
        this.rapport(this.patient);

      },
      error => {
        console.log(error);
      });
  }

  initmodif(id:any) {
    console.log(id);
    this.mediscreensService.getHistory(id)
      .subscribe(data => {
        this.history = data;
        this.donnees = data;
        this.idhistory = this.donnees.id;
        this.mod = 2;

        console.log(this.history)
      },
      error => {
        console.log(error);
      });
  }

  initchamp(){
    this.history = new History();
    this.mod = 1;
  }

  addHistory() {
    this.history.idPatient = this.idPatient;
    this.mediscreensService.addHistory(this.history)
      .subscribe(data => {
        this.donnees = data;
        if (this.donnees.id!=null) {
          this.mediscreensService.alert("Observation ajoutée avec succès ! ", 'sucess');
          this.listHistoriquePatient();
          this.initchamp();
          this.rapport(this.donnees);
        } else {
          this.mediscreensService.alert("Une erreur est survenue, veuillez réessayer", 'error');
        }
      },
      error => {
        console.log(error);
      });
  } 

  editHistory(idHistory){
    this.mediscreensService.editHistory(this.history, idHistory)
      .subscribe(data => {
        this.donnees = data;
        if (this.donnees.id!=null) {
          this.mediscreensService.alert("Observation modifiée avec succès ! ", 'sucess');
          this.listHistoriquePatient();
          this.initchamp();
        } else {
          this.mediscreensService.alert("Une erreur est survenue, veuillez réessayer", 'error');
        }
    },
    error => {
      console.log(error);
    });
} 

rapport(patient){  
  this.mediscreensService.addRapport(patient)
        .subscribe(data => {
          this.donneesRapport = data;
          this.risque = this.donneesRapport.risque;
          console.log(this.donneesRapport);
          if(this.risque=="Aucun risque"){
            this.mediscreensService.alert("Le patient ne présente aucun risque de diabète  ", 'sucess');
          }else{
            this.mediscreensService.alert("Le patient présente un risque de diablète: "+this.risque, 'error');

          }
      },
      error => {
        console.log(error);
      });
}

}
