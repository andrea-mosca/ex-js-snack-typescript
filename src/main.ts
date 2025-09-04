// snack 1
let valore : unknown;
if(typeof valore==="string"){
  console.log(valore.toUpperCase())
  }else if(typeof valore==="number"){
    console.log(valore*2);
  }else if(typeof valore ==="boolean"){console.log(valore?"Si":"No");
  }else if(valore === null){
    console.log("il dato è vuoto");
  }else if(valore instanceof Array){console.log(valore.length);
  }
  else if(valore instanceof Promise){
    valore.then((value)=>console.log(value));

  }else console.log("Valore non supportato");

// snack 2
type Dipendente={
  nome:string,
  cognome:string,
  annoNascita:number,
  sesso: "m"|"f",
  anniDiServizio:number[],
  readonly emailAziendale:string,
  contratto: "indeterminato"| "determinato" | "freelance"
};
// snack 3
type Developer=Dipendente & {
  livelloEsperienza:"Junior"|"Mid"|"Senior",
  linguaggi?:string[],
  certificazioni:string[]
};
type ProjectMenager=Dipendente & {
  teamSize:number|null,
  budgetGestito?:number,
  stakeholderPrincipali:string[]
};
// bonus snack 3
type Team={
  nome:string,
  progettoAttuale:string|null,
  budget:number,
  membri:[ProjectMenager,Developer,...Developer[]]
}