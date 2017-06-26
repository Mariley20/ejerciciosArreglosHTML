function obtenerArreglo(){
  var opcion = document.getElementById('ejercicios').value;
  var numeros = document.getElementById('numeros').value;
	var numValido = document.getElementById('numValidar').value;
  var arreglo = numeros.split(",");
  var mensaje;
  switch(opcion){

    case '1': 
      mensaje = calcularMultiplicacion(arreglo,numValido);
      break;
    case '2':
      mensaje = calculandoFilter(arreglo,numValido);
      break;
    case '3':
      mensaje = calculandoForEach(arreglo, numValido);
      break;
    case '4':
      mensaje = calculandoMap(arreglo);
      break;
    case '5':
      mensaje = ConvertirTemperatura(arreglo);
      break;
    case '6':
      mensaje = calcularProducto(arreglo);
      break
    case '7':
    mensaje = calcularFechaNacimiento(arreglo);
      break;
  }
  console.log(mensaje);
  resultado.innerHTML = mensaje

}


function calcularMultiplicacion(numMultiplica,numValido){
  var resultado = numMultiplica.reduce(function(valorAnterior,valorActual){
    return parseInt(valorAnterior) * parseInt(valorActual);
  }) * numValido;
  return resultado;
}

function calculandoFilter(numCelular,numValido){
  var resultado = "";
    resultado += numCelular.filter(function(n){
      var tresUltimos = n.substr(n.length-3, n.length);
      var tresPrimeros = n.substr(0, 3);
      return tresPrimeros  == numValido || tresUltimos == numValido;
    });
    return resultado;
}

function calculandoForEach(cadenaNumeros,x){
  var numMultiplos = "";
  cadenaNumeros.forEach(function multiplos(value){
    if(value % x == 0){
      numMultiplos += value +", ";
    }
  });
  return numMultiplos + "Son multiplos de "+x;
}

function calculandoMap(arreglo){
  var resultado = "";
  resultado += arreglo.map(function(i){
    return ( i * 2 ) + 1;
  })
  return resultado;
}

function ConvertirTemperatura(temperaturas){
  var resultado = "";
  resultado += temperaturas.map(function(i){
    return (i * (9/5))+32;
  })
  return resultado;
}

function calcularProducto(numMultiplica){
  var resultado ="";
  resultado = numMultiplica.reduce(function(valorAnterior,valorActual){
    return parseInt(valorAnterior) * parseInt(valorActual);
  });
  
  return resultado;
}

function calcularFechaNacimiento(edades){
  var fecha = new Date();
  var ano = fecha.getFullYear();
  var aniosPares = "";
  edades.forEach(function anoNacimiento(value){
    if(value % 2 == 0){
      anio = ano - value;
      aniosPares += anio;
    }
  });
return aniosPares;
}


