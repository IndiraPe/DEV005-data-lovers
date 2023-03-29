//import dataPkmn from './data/pokemon/pokemon.js';

//Pokemon en Top 10
export function top10(arrPkmn){
  const arrPkmnTop = arrPkmn.sort((a, b) => {
    const cpA = a.stats['max-cp'];
    const cpB = b.stats['max-cp'];
    return cpB - cpA;
  });
  const topPkmnSlice = arrPkmnTop.slice(0, 10);
  return topPkmnSlice;
}

//Filtrar por region
export function  filtrarRegion(region, arrPkmn){
  const arrayRegion=arrPkmn.filter(pkm =>{
    if(pkm.generation.name===`${region}`){
      return true
    }
  })
  return arrayRegion;
}

//FILTRAR POR TIPO:
export function filtrarTipo(tipo, arrPkmn){
  const tipoPkm=arrPkmn.filter(pkm=>
    pkm.type[0]===tipo || pkm.type[1]===tipo)
  return tipoPkm;
}

//FILTRAR POR ORDEN 
export function filtrarOrden(ascDesc, arrPkmn){
  const ordenAscDesc=arrPkmn.sort(function(a,b){
    if(ascDesc==='menor'){ 
      return a.num-b.num;
    }else if(ascDesc==='mayor'){
      return b.num-a.num;
    }
  }) 
  return ordenAscDesc;
}
//FILTRAR POR RAREZA:
export function filtrarRareza(rareza, arrPkmn){
  const rarezaPkm=arrPkmn.filter(pkm=>
    pkm['pokemon-rarity']===rareza)
  return rarezaPkm;
}
//FILTRAR POR MAX-CP:
export function filtrarCp(cp, arrPkmn){
  const cpPkm=arrPkmn.sort((a,b)=>{
    return b.stats['max-cp']-a.stats['max-cp']
  })
  if(cp === 'maximo'){
    return cpPkm
  }else if(cp ==='minimo'){
    return cpPkm.reverse()
  }
}
//BUSCAR PKM POR NUM
export function buscar(id, arrPkmn){
  const idPokemon=arrPkmn.filter(pkm=>{
    if(pkm.num===id){
      return true;
    }
  })
  return idPokemon;
}


