// snack 1
let valore : unknown;
if(typeof valore==="string"){
  console.log(valore.toUpperCase())
  }else if(typeof valore==="number"){
    console.log(valore*2);
  }else if(typeof valore ==="boolean"){console.log(valore);
  }else console.log("Valore non supportato");

