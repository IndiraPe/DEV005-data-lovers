import {buscar, filtrarRegion, filtrarOrden, filtrarTipo, filtrarRareza, filtrarCp} from './data.js';
//import dataPkmn from './data/pokemon/pokemon.js';
//const arrJson=[];

fetch("./data/pokemon/pokemon.json", { mode: "no-cors" })
  .then((res) => res.json())
  .then((data) => {
    const arrPkmn = data.pokemon
    //console.log(arrPkmn.length);
    //LISTAR POKEMON
    const template = document.querySelector('.template1');
    const dataList = document.querySelector('.dataList');
    function pintar(datosAPintar){
      dataList.innerHTML='';
      for (let i=0; i<datosAPintar.length; i++){
        //LLENAR LISTADO
        const dataListClone = template.content.cloneNode(true);
        dataListClone.querySelector('.container-num').innerHTML =datosAPintar[i].num;
        dataListClone.querySelector('.container').setAttribute('class', `container containter${[i]} ${datosAPintar[i].num}`);
        dataListClone.querySelector('.container-img').setAttribute("src", datosAPintar[i].img);
        dataListClone.querySelector('.container-name').innerHTML =datosAPintar[i].name.toUpperCase();
        if(datosAPintar[i].type.length>1){
          dataListClone.querySelector('.container-type1').setAttribute("class", `container-type1  ${datosAPintar[i].type[0]}`);
          dataListClone.querySelector('.container-type2').setAttribute("class", datosAPintar[i].type[1]);
        }else{
          dataListClone.querySelector('.container-type1').setAttribute("class", datosAPintar[i].type[0]);
        }
        dataList.appendChild(dataListClone);
      } 
      //ABRIR VENTANA MODAL
      const containers = document.querySelectorAll('.container')
      const modal = document.getElementById('modal')
      containers.forEach(container => {
        container.addEventListener('click', (e) =>{
          modal.style.display = "block";
          const idPkm=e.target.parentNode.classList[2];
          //buscar(idPkm, arrPkmn);
          const resultadoArr = buscar(idPkm, arrPkmn)
          //console.log(resultadoArr[0].name);
          //datos en modal-region
          const modalRegion = document.querySelector('.modal-region');
          const reg = resultadoArr[0].generation.name
          if(reg === 'kanto'){
            modalRegion.setAttribute('src', 'img/kanto.png');
          }else{
            modalRegion.setAttribute('src', 'img/johto.png');
          }
          //datos en modal-number
          const modalNum = document.querySelector('.modal-num');
          modalNum.innerHTML = `N° ${resultadoArr[0].num}`;
          //datos en modal-name
          const modalName = document.querySelector('.modal-name');
          modalName.innerHTML = resultadoArr[0].name.toUpperCase();
          //datos en modal-about
          const modalAbout = document.querySelector('.modal-about');
          modalAbout.innerHTML = resultadoArr[0].about;
          //datos en modal-weight
          const modalWeight = document.querySelector('.modal-weight');
          modalWeight.innerHTML = `<strong>PESO:</strong> ${resultadoArr[0].size.weight}<br><strong>ALTURA:</strong> ${resultadoArr[0].size.height}`;
          //datos en modal-encounter
          const modalEncounter = document.querySelector('.modal-encounter');
          modalEncounter.innerHTML = `<ul><strong>ENCUENTRO:</strong> 
                                        <li>Vel. de huída: ${resultadoArr[0].encounter['base-flee-rate']}</li>
                                        <li>Vel. de captura: ${resultadoArr[0].encounter['base-capture-rate']}</li>
                                      </ul>`;
          //datos en modal-spawn
          const modalSpawn = document.querySelector('.modal-spawn');
          modalSpawn.innerHTML = `<strong>PROB. APARICIÓN:</strong> ${resultadoArr[0]['spawn-chance']}`;
          //datos en modal-table-atack
          const modalTableAttack = document.querySelector('.modal-table-attack');
          modalTableAttack.innerHTML =`
          <tr>
          <th>◓◓◓</th>
          <th>MOV. RÁPIDO</th>
          <th>ATAQ. ESPECIAL</th>
          </tr>
          <tr>
          <td><strong>NOMBRE</strong></td>
          <td>${resultadoArr[0]['quick-move'][0].name}</td>
          <td>${resultadoArr[0]['special-attack'][0].name}</td>
          </tr>
          <tr>
          <td><strong>TIPO</strong></td>
          <td>${resultadoArr[0]['quick-move'][0].type}</td>
          <td>${resultadoArr[0]['special-attack'][0].type}</td>
          </tr>
          <tr>
          <td><strong>B.DAÑO</strong></td>
          <td>${resultadoArr[0]['quick-move'][0]['base-damage']}</td>
          <td>${resultadoArr[0]['special-attack'][0]['base-damage']}</td>
          </tr>
          <tr>
          <td><strong>ENERGÍA</strong></td>
          <td>${resultadoArr[0]['quick-move'][0].energy}</td>
          <td>${resultadoArr[0]['special-attack'][0].energy}</td>
          </tr>
          <tr>
          <td><strong>TIEMPO</strong></td>
          <td>${resultadoArr[0]['quick-move'][0]['move-duration-seg']}</td>
          <td>${resultadoArr[0]['special-attack'][0]['move-duration-seg']}</td>
          </tr>
          `
          //datos en modal-rarity
          const modalRarity = document.querySelector('.modal-rarity');
          const rare = resultadoArr[0]['pokemon-rarity'];
          if(rare === 'normal'){
            modalRarity.setAttribute('src', 'img/pokebola_normal.gif');
          }else if(rare === 'mythic'){
            modalRarity.setAttribute('src', 'img/pokebola_mitico.gif');
          }else{
            modalRarity.setAttribute('src', 'img/pokebola_legendario.gif');
          }
          //PRE EVOLUCIÓN Y EVOLUCIÓN
          //OBTENER EL NÚMERO DE LA PREV Y NETX EVOLUTION
          const datosPkm=resultadoArr[0].evolution;
          let numPrevEv=0;
          let numNextEv=0;
          Object.entries(datosPkm).forEach(entry =>{
            const [key, value]=entry;
            //console.log({key});
            if(key==='next-evolution'){
              const nextEv=value[0];
              Object.entries(nextEv).forEach(entry =>{
                const[key, value]=entry;
                if (key==='num'){
                  numNextEv=value;
                  if(+numNextEv>297){
                    numNextEv=0;
                  }
                  //console.log(numNextEv);
                }
              })
              //console.log('TIENE EVOLUCION', nextEv)
            }else if(key==='prev-evolution'){
              const nextPre=value[0];
              Object.entries(nextPre).forEach(entry =>{
                const[key, value]=entry;
                if (key==='num'){
                  numPrevEv=value;
                  if(+numPrevEv>297){
                    
                    numPrevEv=0;
                    
                  }
                  //console.log(numPrevEv);
                }
              })
              //console.log('TIENE PRE EVOLUCION', nextPre)
            }
          })
          //OBTENER LA INFO DEL POKÉMON DE NEX Y PREV EVOLUTION
          const modalPreEv = document.querySelector('.modal-evL');
          const modalNextEv = document.querySelector('.modal-evR');
          const nameEvL = document.querySelector('.modal-name-evL');
          const nameEvR = document.querySelector('.modal-name-evR');
          const modalCandy = document.querySelector('.modal-candy');
          nameEvL.innerHTML ='No tiene pre-evolución'
          nameEvL.setAttribute('style', 'font-size:.6em')
          nameEvR.innerHTML ='No tiene evolución';
          nameEvR.setAttribute('style', 'font-size:.6em');
          modalCandy.innerHTML =`<img src="img/candy.PNG" alt="caramelo del juego Pokemon GO"> No`;
          modalPreEv.setAttribute('src','');
          modalNextEv.setAttribute('src','');
          if(numPrevEv!==0){
            const pkmPrevEv=buscar(numPrevEv, arrPkmn);
            modalPreEv.setAttribute('src', pkmPrevEv[0].img);
            // datos en modal-name izquierdo
            if('prev-evolution' in resultadoArr[0].evolution){
              nameEvL.innerHTML = resultadoArr[0].evolution['prev-evolution'][0].name.toUpperCase();
              nameEvL.setAttribute('style', 'font-size:.7em')
            }
          }
          if (numNextEv!==0){
            const pkmNextEv=buscar(numNextEv, arrPkmn);
            modalNextEv.setAttribute('src', pkmNextEv[0].img);
            //datos de nombre de next-evolution
            if('next-evolution' in resultadoArr[0].evolution){
              nameEvR.innerHTML = resultadoArr[0].evolution["next-evolution"][0].name.toUpperCase();
              nameEvR.setAttribute('style', 'font-size:.7em');
            }    
            //datos en modal-candy
            if('next-evolution' in resultadoArr[0].evolution){
              modalCandy.innerHTML = `<img src="img/candy.PNG" alt="caramelo del juego Pokemon GO"> ${resultadoArr[0].evolution["next-evolution"][0]['candy-cost']}`;
            } 
          }

          //DATOS DE LA TABLA RESISTENCIA Y DEBILIDAD
          const modalIconRes=document.querySelector('.modal-icon-res');
          const modalIconDeb=document.querySelector('.modal-icon-deb');
          modalIconDeb.innerHTML='';
          modalIconRes.innerHTML='';
          const titleRes=document.createElement('ul');
          const titleDeb=document.createElement('ul');
          titleRes.textContent='RESISTENCIA';
          titleDeb.textContent='DEBILIDAD';
          modalIconRes.appendChild(titleRes);
          modalIconDeb.appendChild(titleDeb);
          const resis=resultadoArr[0].resistant;
          const deb=resultadoArr[0].weaknesses;
          for(let i=0; i<resis.length; i++){
            const li=document.createElement('li');
            li.innerHTML=`<img src="img/${resis[i]}_icon.png">
                          <span> ${resis[i].toUpperCase()}</span>`;
            titleRes.appendChild(li);
          }
          for(let i=0; i<deb.length; i++){
            const li=document.createElement('li');
            li.innerHTML=`<img src="img/${deb[i]}_icon.png">
                          <span> ${deb[i].toUpperCase()}</span>`;
            titleDeb.appendChild(li);
          }
          //datos en modal-img
          const modalImg = document.querySelector('.modal-img');
          modalImg.setAttribute("src", resultadoArr[0].img);
          //datos en modal-name2
          const modalName2 = document.querySelector('.modal-name2');
          modalName2.innerHTML = resultadoArr[0].name.toUpperCase();
          //datos en modal-tipos
          const modalType = document.querySelector('.modal-type');
          const typ = resultadoArr[0].type;
          if(typ.length === 2){
            modalType.innerHTML=''
            const newType1 = document.createElement('span');
            const newType2 = document.createElement('span');
            newType1.setAttribute('class', `${typ[0]}`);
            newType2.setAttribute('class', `${typ[1]}`);
            modalType.appendChild(newType1);
            modalType.appendChild(newType2);
          }else if(typ.length === 1){
            modalType.innerHTML=''
            const newType = document.createElement('span');
            newType.setAttribute('class', `${typ[0]}`);
            modalType.appendChild(newType);
          }
          //datos en modal-huevo
          const modalEgg = document.querySelector('.modal-egg');
          const eggg = resultadoArr[0].egg;
          if(eggg === 'not in eggs'){
            modalEgg.innerHTML = `<img src="img/egg.png" alt="huevo pokemon"> No`;
          }else{
            modalEgg.innerHTML = `<img src="img/egg.png" alt="huevo pokemon"> ${eggg}`;
          }
          //datos en modal-table-power
          const modalTablePower = document.querySelector('.modal-table-power');
          const att = resultadoArr[0].stats;
          modalTablePower.innerHTML = `  
          <tr>
          <th colspan="3">POWER</th>
          </tr>
          <tr>
          <td><label class="label-at" for="atck">Ataque</label></td>
          <td><progress id="atck" max="400" value="${att["base-attack"]}"></progress></td>
          <td class="td-at">${att["base-attack"]}</td>
          </tr>
          <tr>
          <td><label class="label-def" for="atck">Defensa</label></td>
          <td><progress id="def" max="400" value="${att["base-defense"]}"></progress></td>
          <td class="td-at">${att["base-defense"]}</td>
          </tr>
          <tr>
          <td><label class="label-stam" for="atck">Resistencia</label></td>
          <td><progress id="stam" max="500" value="${att["base-stamina"]}"></progress></td>
          <td class="td-at">${att["base-stamina"]}</td>
          </tr>
          <tr>
          <td><label class="label-max" for="atck">Max PC</label></td>
          <td><progress id="max" max="4200" value="${att["max-cp"]}"></progress></td>
          <td class="td-at">${att["max-cp"]}</td>
          </tr>
          <tr>
          <td><label class="label-hp" for="atck">Max HP</label></td>
          <td><progress id="hp" max="410" value="${att["max-hp"]}"></progress></td>
          <td class="td-at">${att["max-hp"]}</td>
          </tr>
          `


        })
      })
      //CERRAR VENTANA MODAL
      const close = document.querySelector('.close')
      close.addEventListener('click',() =>{
        modal.style.display = "none";
      })
    }
    pintar(arrPkmn);
    //FILTRAR POR N°POKEDEX
    const selectPokedex = document.getElementById('selectPokedex')
    function changeOptionPokedex  ()  {
      const valor=selectPokedex.value;
      if(valor===''){
        pintar(arrPkmn);
      }else{
        const orden=filtrarOrden(valor, arrPkmn);
        pintar(orden)
      }
    }
    selectPokedex.addEventListener('change', changeOptionPokedex)
    //FILTRAR POR REGION
    const selectRegion = document.getElementById('selectRegion')
    const changeOptionRegion = () => {
      const optionRegion = selectRegion.options[selectRegion.selectedIndex].value;
      if(optionRegion === 'kanto'){
        const dataKanto=filtrarRegion('kanto', arrPkmn);
        pintar(dataKanto)
      }else if(optionRegion === 'johto'){
        const dataJohto=filtrarRegion('johto', arrPkmn);
        pintar(dataJohto)
      }else if(optionRegion === ''){
        pintar(arrPkmn);
      }
    };
    selectRegion.addEventListener('change', changeOptionRegion)
    //FILTRAR POR TIPO
    const selectType=document.getElementById('selectType');
    const changeOptionType=()=>{
      const tipo=selectType.value;
      if(tipo===''){
        pintar(arrPkmn);
      }else {
        const filterType=filtrarTipo(tipo, arrPkmn);
        pintar(filterType);
      }
    }
    selectType.addEventListener('change', changeOptionType)
    //FILTRAR POR RAREZA
    const selectRareza=document.getElementById('selectRareza');
    const changeOptionRareza=()=>{
      const rareza=selectRareza.value;
      if(rareza===''){
        pintar(arrPkmn);
      }else{
        const filterRareza=filtrarRareza(rareza, arrPkmn);
        pintar(filterRareza);
      }
    }
    selectRareza.addEventListener('change', changeOptionRareza);
    //FILTRAR POR CP
    const selectPC=document.getElementById('selectPC');
    const changeOptionCP=()=>{
      const cp=selectPC.value;
      if(cp===''){
        pintar(arrPkmn);
      }else{
        const filterCP=filtrarCp(cp, arrPkmn);
        pintar(filterCP);
      }
    }
    selectPC.addEventListener('change', changeOptionCP);
    //BUSCAR POKÉMON
    //Limitar caracteres en input
    const busquedapkmn=document.getElementById('busquedapkmn');
    busquedapkmn.addEventListener('keydown', (e)=>{
      if((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 65 || e.keyCode > 90) && e.keyCode !==8 && e.keyCode !==37 && e.keyCode !== 39 && e.keyCode !== 46)
        e.preventDefault();
    })
    //buscar pokémon
    const keyUp=document.getElementById('busquedapkmn')
    keyUp.addEventListener('keyup', (e)=>{
      const inputBuscar=e.target.value.toLowerCase();  
      const arrayBuscar= arrPkmn.filter(pokemon =>{
        const coincidencia=pokemon.name.match(inputBuscar);
        if (coincidencia!==null){
          return true;
        }
      } )
      pintar(arrayBuscar);
    })
    //boton reiniciar pokedex
    const btn = document.querySelector('.lupa');
    btn.addEventListener('click', limpiar)
    function limpiar(){
      window.location.reload();
    }
    //boton estadística
    const btnE = document.getElementById('btnE');
    const canvas = document.getElementById('canvas')
    btnE.addEventListener('click', mostrar)
    function mostrar(){
      canvas.style.display = 'block'
    }
    const close2 = document.querySelector('.close2')
    close2.addEventListener('click',() =>{
      canvas.style.display = 'none';
    })
    //Estadísticas
    const xValues = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];
    const yValues = []
    for(let i = 0; i<xValues.length; i++){
      const aaa = arrPkmn.filter(pkmn => 
        pkmn.type[0]===xValues[i] || pkmn.type[1]===xValues[i]
      )
      const x = aaa.length
      yValues.push(x)
    }
    const barColors = [
      "#8FD941",
      "#5B6074",
      "#327ECB",
      "#FAD61F",
      "#F9B1E5",
      "#DE5466",
      "#F78B28",
      "#768cd0",
      "#A28CE2",
      "#38BD6E",
      "#D3C893",
      "#95FAFA",
      "#C0C0BA",
      "#F872E2",
      "#FF8B7A",
      "#C9B758",
      "#2C9399",
      "#4AB6F3"
    ];

    new Chart(document.getElementById('myChart'), { // eslint-disable-line
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "ESTADÍSTICAS DE POKÉMON POR TIPO"
        }
      }
    });
  })
  .catch((error) => {
    console.error(error); // eslint-disable-line
  });