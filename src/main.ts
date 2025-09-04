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

