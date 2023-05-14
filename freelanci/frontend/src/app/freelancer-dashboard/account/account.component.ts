import { Component } from '@angular/core';
import { MyserveciesService } from 'src/app/myservecies.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
mesoffres:any;
userdata:any;
name:String="";
familyname:String="";
email:String="";
password:String="";
constructor(public auth:MyserveciesService){
  this.name=auth.getdata().name;
  this.email=auth.getdata().email;
  this.password=auth.getdata().password;
  this.familyname=auth.getdata().familyname;
  console.log(this.name)
  this.mesoffres = [
    {
      title:
        "à la recherche de quelqu'un qui peut faire des photos comme celles-ci (lien ci-dessous) en utilisant l'IA",
        info:'Forfait - Intermédiaire - Est. Budget : 10 $ - Publié il y a 13 heures',
      description: "Salut les gars :) Je cherche quelqu'un qui peut faire des photos comme celles-ci, en utilisant AI - https://www.dropbox.com/sh/yu3wvamp008mszl/AABrVgyTp7WGH4EfMwFNAZI3a?dl=0 si vous pouviez m'envoyer une image comme ci-dessus en utilisant AI comme échantillon avec votre lettre, nous pouvons commencer à travailler tout de suite. Hâte d'avoir des nouvelles de vous tous! merci plusà propos de rechercher quelqu'un qui peut faire des photos comme celles-ci (lien ci-dessous) en utilisant l'IA Afficher plus...",
      budget: 900,
      date: '22/10/2023',
      prop: 19,
      invit: 18,
      emp: 0,
    },
    {
      title:
        "Éditeur de thème WordPress ",
        info:'',
      description: "Nous recherchons un éditeur de thème WordPress expérimenté et créatif pour une page de destination utilisant notre thème wordpress existant, Vanguard (https://themeforest.net/item/vangard-a-theme-for-freelancers-and-agencies/18396136 ). La page de destination est entièrement conçue. Nous avons juste besoin qu'il soit construit en utilisant notre thème actuel.Afficher plus",
      budget: 100,
      date: '22/10/2023',
      prop: 20,
      invit: 10,
      emp: 5,
    },
    {
      title: 'CV de conception',
      info:"Prix ​​fixe - Niveau d'entrée - Est. Budget : 5 $ - Publié il y a 19 heures",
      description: "J'ai besoin de vous pour concevoir mon CV sur Word ou PDF - ouvert à toutes les idées, j'ai déjà créé du texte, j'ai juste besoin de la conception, vous devez commencer dès que vous êtes embauché Afficher plus",
      budget: 400,
      date: '22/10/2021',
      prop: 10,
      invit: 8,
      emp: 2,
    },
    {
      title:
        "Besoin d'embaucher un tuteur de codage pour enseigner HTML , CSS, JS et React",
        info:"Horaire : 10 $ à 20 $ - Intermédiaire - Est. Durée : 3 à 6 mois, Moins de 30 heures/semaine - Publié il y a 41 minutes",
      description: "Je cherche à embaucher un tuteur sur Upwork pour fournir un coaching de groupe pour une académie active, enseignant à un petit groupe d'individus (5-6 personnes) HTML , CSS et Javascript, y compris REACT, dans plusieurs classes. Le candidat idéal aura une vaste expérience en HTML , CSS, JS et React, ainsi qu'une passion pour l'enseignement et le.. Afficher plus",
      budget: 400,
      date: '22/10/2021',
      prop: 10,
      invit: 8,
      emp: 2,
    },
  ];
}
changeprofilepic(){
  
}
}
