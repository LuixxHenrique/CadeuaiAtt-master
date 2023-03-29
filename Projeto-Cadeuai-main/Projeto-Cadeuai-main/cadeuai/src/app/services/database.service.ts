import { Injectable } from '@angular/core';
// import { maps } from '../modal/maps.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { Firestore, collectionData, collection} from '@angular/fire/firestore';
import { getStorage, ref, getDownloadURL} from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    public arraymapas = [
      {nomeloja: "1 a 99", rotaloja: "1,99"},
      {nomeloja: "agencia de modelos", rotaloja: "agencia_de_modelos"},
      {nomeloja: "agua de cheiro", rotaloja: "agua_de_cheiro"},
      {nomeloja: "americanas", rotaloja: "americanas"},
      {nomeloja: "bloco do urso",rotaloja: "bloco_do_urso"},
      {nomeloja: "burger king",rotaloja: "burguer_king"},
      {nomeloja: "casarao",rotaloja: "casarao"},
      {nomeloja: "centauro",rotaloja: "centauro"},
      {nomeloja: "chiquinho",rotaloja: "chiquinho"},
      {nomeloja: "cineart",rotaloja: "cineart"},
      {nomeloja: "click sss",rotaloja: "csss"},
      {nomeloja: "cvc",rotaloja: "cvc"},
      {nomeloja: "day cambio",rotaloja: "day_cambio"},
      {nomeloja: "detran mg",rotaloja: "detranmg"},
      {nomeloja: "fair play",rotaloja: "fair_play"},
      {nomeloja: "foco",rotaloja: "foco"},
      {nomeloja: "griletto",rotaloja: "griletto"},
      {nomeloja: "havana",rotaloja: "havana"},
      {nomeloja: "katuxa",rotaloja: "katuxa"},
      {nomeloja: "kobe",rotaloja: "kobe"},
      {nomeloja: "lamello",rotaloja: "lamello"},
      {nomeloja: "le postiche",rotaloja: "le_postiche"},
      {nomeloja: "livruz",rotaloja: "livruz"},
      {nomeloja: "magia dos pes",rotaloja: "magia_dos_pes"},
      {nomeloja: "magic bowling",rotaloja: "magic_bowling"},
      {nomeloja: "maria bonita",rotaloja: "maria_bonita"},
      {nomeloja: "marisa",rotaloja: "marisa"},
      {nomeloja: "mc donalds",rotaloja: "mc_donalds"},
      {nomeloja: "montana express",rotaloja: "montana_express"},
      {nomeloja: "morana",rotaloja: "morana"},
      {nomeloja: "mr fit",rotaloja: "mr_fit"},
      {nomeloja: "mundo das fritas",rotaloja: "mundo_das_fritas"},
      {nomeloja: "nuts burguer",rotaloja: "nuts_burguer"},
      {nomeloja: "oboticario",rotaloja: "oboticario"},
      {nomeloja: "paraiso makeup",rotaloja: "paraiso"},
      {nomeloja: "parmeggio",rotaloja: "parmeggio"},
      {nomeloja: "polo wear",rotaloja: "polo_wear"},
      {nomeloja: "prato fino",rotaloja: "prato_fino"},
      {nomeloja: "renner",rotaloja: "renner"},
      {nomeloja: "ri happy",rotaloja: "ri_happy"},
      {nomeloja: "riachuelo",rotaloja: "riachuelo"},
      {nomeloja: "rui despachante",rotaloja: "rui_despachante"},
      {nomeloja: "sao paulo",rotaloja: "sao_paulo"},
      {nomeloja: "subway",rotaloja: "subway"},
      {nomeloja: "supermercado bh",rotaloja: "bh"},
      {nomeloja: "the point",rotaloja: "the_point"},
      {nomeloja: "track field",rotaloja: "track_field"},
      {nomeloja: "travesseiro de coluna",rotaloja: "travesseiro_de_coluna"},
      {nomeloja: "uai fai",rotaloja: "uai_fai"},
      {nomeloja: "world tennis",rotaloja: "world_tennis"},
      {nomeloja: "zinzane",rotaloja: "zinzane"},
    ]


    constructor() {}
  


    getmapsimages() {
      const storage = getStorage();
      getDownloadURL(ref(storage, 'mapa_shopping/Ponto_de_inicio(P4).png')).then((url) => {
          
          const xhr = new XMLHttpRequest()
          xhr.responseType = 'blob'
          xhr.onload = (event) => { const blob = xhr.response }
          xhr.open('GET', url)
          xhr.send()
        })
        .catch((error) => {
          switch (error.code) {
            case 'storage/object-not-found':
              
              break;
            case 'storage/unauthorized':
              console.log('User doesnt have permission to access the object')
              break;
            case 'storage/canceled':
              console.log('User canceled the upload')
              break;
            case 'storage/unknown':
              console.log('Unknown error occurred, inspect the server response')
              break;
          }
        })
      }
}
