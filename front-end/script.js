const nav = document.querySelector('nav');
const mainContainer = document.querySelectorAll('.mainContainer input');
const section = document.querySelector(".sectionContainer");
const body = document.querySelector('body');
const select = document.getElementById('selectCompany');
const logo = document.getElementById('companyLogo');
/*-------------------------------------------*/
document.documentElement.lang = 'en';

/*Funcion addContent = Esta funcion toma los valores de los input de sectorContent, valida
que los campos no esten vacios, si estos no se encuentran vacios se genera una fila de 
elementos Li que toman el valor del respectivo input con un boton el cual permite al 
usuario borrar la fila si es necesario. */

const values = document.querySelectorAll(".g");
const sas = document.querySelector(".sas");
const newSectionContainer = document.querySelector('.newSectionContainer');
const copyUl1 = [];


function addContent() {
  let s = 0;
  let newUl = document.createElement("ul");
  newUl.classList.add('newSectionContent');
  let content = [];
  let text = values[0].value;
  let patron = /^[a-zA-Z0-9,.-_ ]*$/;

  //Validacion para ver que la descripcion no se encuentre vacia 
  if (text == undefined || text == '') {
    swal.fire({
      title: 'Error!',
      text: '!La descripcion se encuentra vacia, se requiere una cadena de texto!',
      icon: 'error',
      background: '#202b38',
      color: '#fff',
      confirmText: 'Ok'
    })
    s = 1;
  }
  else {
    if (!patron.test(text) == true) {
      swal.fire({
        title: '¡Error!',
        text: '¡La descripcion ingresada contiene caractener invalidos! (Caracteres validos: a-z, A-Z, 0-9, ",", ".", "-", "_")!',
        icon: 'error',
        background: '#202b38',
        color: '#fff',
        confirmButtonText: 'Ok'
      });
      s = 1;
    }
    else { s = 0; }
  }

  //Validacion para que cualquiera de estas tres celdas: HR, HNR y D. No se encuentren las 3 vacias.
  if (values[3].value == '' && values[4].value == '' && values[5].value == '') {
    swal.fire({
      title: '¡Error!',
      text: '¡Se requiere llenar una de las celdas! (Haberes Remu, Haberes no Remu, Descuentos).',
      icon: 'error',
      background: '#202b38',
      color: '#fff',
      confirmButtonText: 'Ok'
    });
    s = 1;
  }
  else { s = 0; }

  if (s == 0) {
    for (let i = 0; i < values.length; i++) {
      if (values[i].value == undefined || values[i].value == 0 || values[i].value == NaN) {
        content[i] = '';
      }
      else {
        content[i] = values[i].value;
      }
    }

    let num = [
      parseFloat(content[3]),
      parseFloat(content[4]),
      parseFloat(content[5])
    ];
    
    newUl.innerHTML = `
    <input type="text" minlength="3" maxlength="50" class="g" value="${content[0]}" disabled> 
    <input type="text" min="0" max="10000000" value="${content[1]}" disabled>
    <input type="text" min="0" max="10000000" value="${content[2]}" disabled>
    <input type="text" min="0" max="10000000" value="${isNaN(num[0]) ? '' : num[0].toFixed(2)}" class="a" disabled>
    <input type="text" min="0" max="10000000" value="${isNaN(num[1]) ? '' : num[1].toFixed(2)}" class="b" disabled>
    <input type="text" min="0" max="10000000" value="${isNaN(num[2]) ? '' : num[2].toFixed(2)}" class="c" disabled>
    <button type="button" class="deleteButton">x</button>`;

    copyUl1.push(newUl.cloneNode(true));
    // const copyUl2 = newUl.cloneNode(true);
    sas.appendChild(newUl);

    // newSectionContainer.appendChild(copyUl2);
    calcule();
    for (let i = 0; i < values.length; i++) {
      values[i].value = '';
    }
    sortElements();
  }
  const deleteButton = newUl.querySelector(".deleteButton");
  deleteButton.addEventListener("click", () => {
    newUl.remove();
    calcule();
  });
}

/*-------------------------------------------*/

function sortElements() {
  const elements = Array.from(sas.children);
  elements.sort(compareElements);
  sas.innerHTML = ''; // Vaciar el contenedor
  elements.forEach((element) => {
    sas.appendChild(element); // Agregar los elementos ordenados al contenedor
  });
}


/*-------------------------------------------*/

const newUl = document.querySelector('.newSectionContent');

function compareElements(a, b) {
  var classAValueA = a.querySelector('.a').value.trim();
  var classAValueB = b.querySelector('.a').value.trim();
  var classBValueA = a.querySelector('.b').value.trim();
  var classBValueB = b.querySelector('.b').value.trim();
  var classCValueA = a.querySelector('.c').value.trim();
  var classCValueB = b.querySelector('.c').value.trim();

  if (classAValueA !== classAValueB) {
    if (classAValueA && classAValueB) {
    } else if (!classAValueA) {
      return classAValueB.localeCompare(classAValueA);
      return 1;
    } else {
      return -1;
    }
  } else if (classBValueA !== classBValueB) {
    if (classBValueA && classBValueB) {
      return classBValueB.localeCompare(classBValueA);
    } else if (!classBValueA) {
      return 1;
    } else {
      return -1;
    }
  } else {
    if (classCValueA && classCValueB) {
      return classCValueB.localeCompare(classCValueA);
    } else if (!classCValueA) {
      return 1;
    } else {
      return -1;
    }
  }
}
/*-------------------------------------------*/


/*Funcion Suma inputs para sub total/totalneto */
function calcule() {
  let totalHR = document.querySelector("#totalHR");
  let totalHNR = document.querySelector("#totalHNR");
  let totalD = document.querySelector("#totalD");
  let totalNeto = document.querySelector("#totalNeto");

  // Obtener todos los elementos con la clase 'a' y sumar sus valores
  let elementosA = document.querySelectorAll(".a");
  let sumaA = 0;
  elementosA.forEach(function (elemento) {
    if (!isNaN(parseFloat(elemento.value))) {
      sumaA += parseFloat(elemento.value);
    }
  });
  totalHR.value = sumaA.toFixed(2);

  // Obtener todos los elementos con la clase 'b' y sumar sus valores
  let elementosB = document.querySelectorAll(".b");
  let sumaB = 0;
  elementosB.forEach(function (elemento) {
    if (!isNaN(parseFloat(elemento.value))) {
      sumaB += parseFloat(elemento.value);
    }
  });
  totalHNR.value = sumaB.toFixed(2);

  // Obtener todos los elementos con la clase 'c' y sumar sus valores
  let elementosC = document.querySelectorAll(".c");
  let sumaC = 0;
  elementosC.forEach(function (elemento) {
    if (!isNaN(parseFloat(elemento.value))) {
      sumaC += parseFloat(elemento.value);
    }
  });
  totalD.value = sumaC.toFixed(2);

  // Calcular el valor de totalNeto
  let num1 = (parseFloat(totalHR.value) + parseFloat(totalHNR.value)) - parseFloat(totalD.value);
  totalNeto.value = num1.toFixed(2);

  const totalAString = document.getElementById("totalAString");
  const number = parseFloat(totalNeto.value);
  const totalEnLetras = numberToLetters(number);
  totalAString.value = totalEnLetras;
}




/*-------------------------------------------*/

function numberToLetters(cantidad) {

  var numero = 0;
  cantidad = parseFloat(cantidad);

  if (cantidad == "0.00" || cantidad == "0") {
    return "CERO con 00/100 ";
  } else {
    var ent = cantidad.toString().split(".");
    var arreglo = separar_split(ent[0]);
    var longitud = arreglo.length;

    switch (longitud) {
      case 1:
        numero = unidades(arreglo[0]);
        break;
      case 2:
        numero = decenas(arreglo[0], arreglo[1]);
        break;
      case 3:
        numero = centenas(arreglo[0], arreglo[1], arreglo[2]);
        break;
      case 4:
        numero = unidadesdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3]);
        break;
      case 5:
        numero = decenasdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4]);
        break;
      case 6:
        numero = centenasdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5]);
        break;
    }

    ent[1] = isNaN(ent[1]) ? '00' : ent[1];

    return numero + " con " + ent[1] + "/100";
  }
}

function unidades(unidad) {
  var unidades = Array('UN ', 'DOS ', 'TRES ', 'CUATRO ', 'CINCO ', 'SEIS ', 'SIETE ', 'OCHO ', 'NUEVE ');


  return unidades[unidad - 1];
}

function decenas(decena, unidad) {
  var diez = Array('ONCE ', 'DOCE ', 'TRECE ', 'CATORCE ', 'QUINCE', 'DIECISEIS ', 'DIECISIETE ', 'DIECIOCHO ', 'DIECINUEVE ');
  var decenas = Array('DIEZ ', 'VEINTE ', 'TREINTA ', 'CUARENTA ', 'CINCUENTA ', 'SESENTA ', 'SETENTA ', 'OCHENTA ', 'NOVENTA ');

  if (decena == 0 && unidad == 0) {
    return "";
  }

  if (decena == 0 && unidad > 0) {
    return unidades(unidad);
  }

  if (decena == 1) {
    if (unidad == 0) {
      return decenas[decena - 1];
    } else {
      return diez[unidad - 1];
    }
  } else if (decena == 2) {
    if (unidad == 0) {
      return decenas[decena - 1];
    }
    else if (unidad == 1) {
      return veinte = "VEINTI" + "UNO";
    }
    else {
      return veinte = "VEINTI" + unidades(unidad);
    }
  } else {

    if (unidad == 0) {
      return decenas[decena - 1] + " ";
    }
    if (unidad == 1) {
      return decenas[decena - 1] + " Y " + "UNO";
    }

    return decenas[decena - 1] + " Y " + unidades(unidad);
  }
}

function centenas(centena, decena, unidad) {
  var centenas = Array("CIENTO ", "DOSCIENTOS ", "TRESCIENTOS ", "CUATROCIENTOS ", "QUINIENTOS ", "SEISCIENTOS ", "SETECIENTOS ", "OCHOCIENTOS ", "NOVECIENTOS ");

  if (centena == 0 && decena == 0 && unidad == 0) {
    return "";
  }
  if (centena == 1 && decena == 0 && unidad == 0) {
    return "CIEN ";
  }

  if (centena == 0 && decena == 0 && unidad > 0) {
    return unidades(unidad);
  }

  if (decena == 0 && unidad == 0) {
    return centenas[centena - 1] + "";
  }

  if (decena == 0) {
    var numero = centenas[centena - 1] + "" + decenas(decena, unidad);
    return numero.replace(" Y ", " ");
  }
  if (centena == 0) {

    return decenas(decena, unidad);
  }

  return centenas[centena - 1] + "" + decenas(decena, unidad);

}

function unidadesdemillar(unimill, centena, decena, unidad) {
  var numero = unidades(unimill) + " MIL " + centenas(centena, decena, unidad);
  numero = numero.replace("UN  MIL ", "MIL ");
  if (unidad == 0) {
    return numero.replace(" Y ", " ");
  } else {
    return numero;
  }
}

function decenasdemillar(decemill, unimill, centena, decena, unidad) {
  var numero = decenas(decemill, unimill) + " MIL " + centenas(centena, decena, unidad);
  return numero;
}

function centenasdemillar(centenamill, decemill, unimill, centena, decena, unidad) {

  var numero = 0;
  numero = centenas(centenamill, decemill, unimill) + " MIL " + centenas(centena, decena, unidad);

  return numero;
}

function separar_split(texto) {
  var contenido = new Array();
  for (var i = 0; i < texto.length; i++) {
    contenido[i] = texto.substr(i, 1);
  }
  return contenido;
}
/*-------------------------------------------*/


/* Funcion para imprimir solo inputs y guardar en txt. EN DESARROLLO*/

const btnPrint = document.querySelector("#btnPrint");
const printContainer = document.querySelector(".printContainer");
const container = document.querySelector(".container");
const containerPElements = document.querySelectorAll('.container p');
const printValues = document.querySelectorAll('.dataTopR input, .midHeader input, .dataBottom input, .downR input');
const inputValues = [];


function beforePrint() {
  let oculto = document.querySelectorAll(".mainContainer, nav, button, select, footer");
  oculto.forEach(element => {
    element.classList.add("hidden");
    printContainer.classList.remove("hidden");
    body.style.backgroundColor = "white";
  });

  /*En esta parte se toman los valores del MainContainer y se pegan en el PrintContainer*/
  printValues.forEach((input) => {
    inputValues.push(input.value);
  });

  containerPElements.forEach((p, index) => {
    if (!inputValues[index] == '' || !inputValues[index] == undefined) {
      p.textContent = inputValues[index];
    }
    else {
      p.textContent = ' ';
    }
  });

  copyUl1.forEach(e => {
    newSectionContainer.appendChild(e);
  });
  const clontainer = container.cloneNode(true);
  printContainer.appendChild(clontainer);
}

function afterPrint() {
  let visible = document.querySelectorAll(".mainContainer, nav, button");

  visible.forEach(element => {
    element.classList.remove("hidden");
    printContainer.classList.add("hidden");
  });
  document.body.style.backgroundColor = "#202b38";
  inputValues.splice(0, inputValues.length);

  let lastchild = printContainer.lastChild;
  if (lastchild instanceof Element) {
    lastchild.remove();
  }
}

btnPrint.addEventListener("click", (event) => {
  if (selectCompany.value === "") {
    swal.fire({
      title: 'Error!',
      text: '¡Debes elegir un logo antes de la impresion!',
      icon: 'error',
      background: '#202b38',
      color: '#fff',
      confirmButtonText: 'Ok'
    })
  }
  else {
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    window.print();
  }
});


/*----Control del "Select" para cambiar datos de empresa----*/

selectCompany.addEventListener("change", function () {
  const selectedOption = selectCompany.value;
  const newCompanyLogo = document.querySelector('.newCompanyLogo');
  const p1 = document.querySelector('.p1');
  const p2 = document.querySelector('.p2');
  const span1 = document.querySelector('.span1');
  const span2 = document.querySelector('.span2');
  switch (selectedOption) {
    case "logo1":
      companyLogo.src = "Logo1.png";
      newCompanyLogo.style.backgroundImage = "url(Logo1.png)";
      p1.classList.remove('hidden');
      p2.classList.add('hidden');
      span1.classList.remove('hidden');
      span2.classList.add('hidden');
      break;
    case "logo2":
      companyLogo.src = "Logo2.png";
      newCompanyLogo.style.backgroundImage = "url(Logo2.png)";
      p1.classList.add('hidden');
      p2.classList.remove('hidden');
      span1.classList.add('hidden');
      span2.classList.remove('hidden');
      break;

    default:
      companyLogo.src = "Logo3.png";
      newCompanyLogo.style.backgroundImage = "url(Logo3.png)";
      break;
  }
})

/*-------------------------------------------*/

const btnClean = document.querySelector('#btnClean');

btnClean.addEventListener('click', () => {
  location.reload();
});
