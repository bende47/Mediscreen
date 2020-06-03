import { Component, OnInit } from '@angular/core';
import { MediscreensService } from "src/app/services/mediscreens.service";
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  iduser: any;
  x: any;
  donnees: any;
  groupes: any;
  idgroupe: any;
  donnee: any;
  idcont: any;
  mod: any;
  p: number = 1;
  patient:any;


  constructor(
    public toastr: ToastrManager,
    private mediscreensService: MediscreensService,
    private router: Router
  ) {
  }


  ngOnInit() {
    this.listHistorique();  
  }

  listHistorique(){
    this.mediscreensService.listHistorique()
    .subscribe(data => {
      this.donnees = data;  
      this.x = this.donnees.length;
    },
    error => {
      console.log(error);
    });
  }

  getPatient(id:any){
    this.mediscreensService.getPatient(id)
      .subscribe(data => {
        this.patient = data;
      },
      error => {
        console.log(error);
      });
  }


//   getPatient(){
//     this.mediscreensService.getPatient(this.idPatient)
//       .subscribe(data => {
//         this.patient = data;
//       },
//       error => {
//         console.log(error);
//       });
//   }

//   initmodif(id:any) {
//     console.log(id);
//     this.mediscreensService.getHistory(id)
//       .subscribe(data => {
//         this.history = data;
//         this.donnees = data;
//         this.idhistory = this.donnees.id;
//         this.mod = 2;

//         console.log(this.history)
//       },
//       error => {
//         console.log(error);
//       });
//   }

//   initchamp(){
//     this.history = new History();
//     this.mod = 1;
//   }

//   addHistory() {
//     this.history.idPatient = this.idPatient;
//     this.mediscreensService.addHistory(this.history)
//       .subscribe(data => {
//         this.donnees = data;
//         if (this.donnees.id!=null) {
//           this.mediscreensService.alert("Observation ajoutée avec succès ! ", 'sucess');
//           this.listHistoriquePatient();
//           this.initchamp();

//         } else {
//           this.mediscreensService.alert("Une erreur est survenue, veuillez réessayer", 'error');
//         }
//       },
//       error => {
//         console.log(error);
//       });
//   } 

//   editHistory(idHistory){
//     this.mediscreensService.editHistory(this.history, idHistory)
//       .subscribe(data => {
//         this.donnees = data;
//         if (this.donnees.id!=null) {
//           this.mediscreensService.alert("Observation modifiée avec succès ! ", 'sucess');
//           this.listHistoriquePatient();
//           this.initchamp();
//         } else {
//           this.mediscreensService.alert("Une erreur est survenue, veuillez réessayer", 'error');
//         }
//     },
//     error => {
//       console.log(error);
//     });
// } 



}
