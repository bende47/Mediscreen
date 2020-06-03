import { Component, OnInit } from '@angular/core';
import { MediscreensService } from "src/app/services/mediscreens.service";
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { Patient } from '../../model/patient';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-groupe',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],

})
export class PatientComponent implements OnInit {

  patient: Patient = new Patient();
  iduser: any;
  donnee: any;
  donnees: any;
  idpatient: any;
  x: any;
  y: any;
  lib: any;
  listcont: any;
  mod: any;
  p: number = 1;
  constructor(
    public toastr: ToastrManager,
    private mediscreensService: MediscreensService,
    private router: Router,
    private datePipe: DatePipe,

  ) {

  }

  ngOnInit() { 
    this.listPatient(); 
    this.initchamp();
  }

  listPatient(){
    this.mediscreensService.listPatients()
    .subscribe(data => {
      this.donnees = data;
      this.x = this.donnees.length;
    },
    error => {
      console.log(error);
    });
  }

  doRefresh(ev: any) {   
    this.mediscreensService.listPatients()
      .subscribe(data => {
        this.donnees = data;
        this.x = this.donnees.length;
        let val = ev.target.value;
        if (val && val.trim() != '') {
          this.donnees = this.donnees.filter((item) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
                    item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.sex.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.phone.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.address.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.birthday.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      },
      error => {
        console.log(error);
      });

  }


  addPatient() {
    this.mediscreensService.addPatient(this.patient)
      .subscribe(data => {
        this.donnee = data;
        if (this.donnee!=null) {
          this.mediscreensService.alert("Patient ajouté avec succès ! ", 'sucess');
          this.listPatient();
          this.initchamp();
        } else {
          this.mediscreensService.alert("Ce patient existe déjà", 'error');
        }
      },
      error => {
        console.log(error);
      });
  } 

  editPatient(idpatient){
      this.mediscreensService.editPatient(this.patient, idpatient)
        .subscribe(data => {
          this.donnee = data;
          if (this.donnee!=null) {
            this.mediscreensService.alert("Patient modifié avec succès ! ", 'sucess');
            this.listPatient();
            this.initchamp();
          } else {
            this.mediscreensService.alert("Ce patient existe déjà", 'error');
          }
      },
      error => {
        console.log(error);
      });
  } 

  initmodif(id) {
    this.mediscreensService.getPatient(id)
      .subscribe(data => {
        this.patient = data;
        this.donnee = data;
        this.idpatient = this.donnee.id;
        this.mod = 2;
        this.patient.birthday = this.datePipe.transform(this.patient.birthday, 'yyyy-MM-dd');
      },
      error => {
        console.log(error);
      });
  }

  initchamp(){
    this.patient = new Patient();
    this.mod = 1;
    this.patient.sex = "M";
  }

  detailhistorique(id:any){
    this.router.navigate(["dashboard/detail/"+id]);
  }
}
