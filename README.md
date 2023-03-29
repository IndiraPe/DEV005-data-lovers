<p align="center">
  <img width="460" height="120" src="/src/img/tittlepkmn.png">
</p>

## Índice

* [1. Introducción](#1-introducción)
* [2. PokeFanGO](#2-pokefango)
* [3. Historias de usuario](#3-historias-de-usuarios)
* [4. Prototipos de diseño](#4-prototipos-de-diseño)
* [5. Problemas detectados en test de usabilidad](#5-Problemas-detectados-en-test-de-usabilidad)
* [6. Objetivos de aprendizaje](#6-Objetivos-de-aprendizaje)
* [7. Checklist](#7-Checklist)

***

## 1. Introducción

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y ha sido nombrada "el mejor juego para móviles" por Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch (tomado de Google Play). Los usuarios del juego se convierten en "Maestros/ entrenadores de Pokémon" y pueden:

* Descubrir el mundo Pokémon: explorar y descubrir nuevos Pokémon allá donde vayan.
* Atrapar distintos Pokémon para completar su Pokédex.
* Pelear contra Pokémon de otros entrenadores y conquistar un gimnasio.
* Competir en épicos combates contra otros entrenadores.
* Hacer equipo con otros entrenadores para atrapar poderosos Pokémon durante las incursiones.

![Bienvenidos](/src/img/imgMe.png)

## 2. PokeFanGO

PokeFanGO!! nació para todos los fans del popular juego PokémonGO, puede ser para jugadores experimentados y también para novatos.

Para este proyecto, comenzamos por preguntar a varios jugadores pokémon sobre que esperaban encontrar, que información era útil o cómo realizaban sus búsquedas.

De estas preguntas, concluímos que deseaban un Top, una lista completa de todos los pokemon, poder buscarlos por tipo, región, rareza, fuerza y por sus nombres; también, querían conocer en detalle a los pokemon (ataques, evoluciones, caramelos, tipos, rangos de fuerza y lore).

Por lo que construímos 3 historias de usuario, con sus respectivos criterios de aceptación y definición de terminado.
Se espera que esta página pueda ayudarlos a conocer los pokémon para sacarle el mayor provecho al juego, y también pueda orientar a los jugadores novatos que apenas conocen a sus pokémon.

El diseño visual fue inspirado de la página oficial de [PokémonGO](https://pokemongolive.com/) ,usamos tonos oscuros de azul y tonos claros de verde para el contraste, también se usó el mismo fondo para la pokedex y para acentuar algunos toques de color, usamos el tono amarillo de Pikachu.
Varios elementos en este proyecto fueron diseñados en Photoshop, como el título del proyecto, fondo del modal, botón de pokebola, etc.
La página es responsive para PC, tablet y celular.

![Vistas Responsive](/src/img/visual.jpg)

También se agregó de manera adicional, un cuadro de estadísticas por tipo de pokemon, para que los usuarios puedan conocer que tipos de pokémon son más abundantes en el universo del juego.

Fue testeado al 100% de sus líneas, y probado con usuarios, para saber si habían errores o bug por corregir; también se consumió la data de JSON.

## 3. Historias de usuarios

![HU1](/src/img/HU1.jpg)
![HU2](/src/img/HU2.jpg)
![HU3](/src/img/HU3.jpg)

## 4. Prototipos de diseño

Prototipo de baja fidelidad: <details><summary>Aquí</summary><p>

  ![prototipo](/src/img/prototipo.jpg)
  
</p></details>


Prototipo de alta fidelidad: https://scene.zeplin.io/project/6421b04ed5549922e109d3e6 

## 5. Problemas detectados en test de usabilidad

* El primer diseño visual de la HU1, recibió críticas por los múltiples elementos '.gif', provocando "ruido visual". Lo solucionamos cambiando la imagen de fondo y reduciendo los elementos a los necesarios.
* El primer top fue de probabilidad de apariciones, lo cual no fue impactante para los usuarios, nos pidieron cambiarlo a un top mas interesante, de fuerza, porque según afirmaron: "Siempre nos topamos con esos pokemon en cada esquina, no hay nada interesante en ello". Lo solucionamos cambiando el top con los pokemon más fuertes.
* En la ventana de pokedex, nos informaron de un problema con los filtros, "¿Qué pasa si quiero reiniciar mi búsqueda?, ¿Tengo que regresar las opciones por defecto?", aunque se podría solucionar refrescando la página, nos aseguramos agregando un botón que limpie los filtros.
* Nos informaron de unos bugs en la ventanas modal de algunos pokémon, no mostraba la data completa. Lo solucionamos limitando el filtro de la data a pokemon que sobrepasaban del n°251, lo cual originaba el error.

## 6. Objetivos de aprendizaje

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 7. Checklist

* :heavy_check_mark: Usa VanillaJS.
* :heavy_check_mark: Pasa linter (`npm run pretest`)
* :heavy_check_mark: Pasa tests (`npm test`)
* :heavy_check_mark: Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* :heavy_check_mark: Incluye _Definición del producto_ clara e informativa en `README.md`.
* :heavy_check_mark: Incluye historias de usuario en `README.md`.
* :heavy_check_mark: Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* :heavy_check_mark: Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* :heavy_check_mark: Incluye link a Zeplin en `README.md`.
* :heavy_check_mark: Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* :heavy_check_mark: UI: Muestra lista y/o tabla con datos y/o indicadores.
* :heavy_check_mark: UI: Permite ordenar data por uno o más campos (asc y desc).
* :heavy_check_mark: UI: Permite filtrar data en base a una condición.
* :heavy_check_mark: UI: Es _responsive_.
