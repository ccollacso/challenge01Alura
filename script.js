	var botonEncriptar = document.getElementById("botonEncriptar");
	botonEncriptar.addEventListener("click", encriptar);

	var botonDesencriptar = document.getElementById("botonDesencriptar");
	botonDesencriptar.addEventListener("click", desencriptar);

	var botonCopiar = document.getElementById("botonCopiar");
	botonCopiar.addEventListener("click", copiar);

	function encriptar(){

		var textoEntrada = document.getElementById('textoentrada').value;
		var textoEncriptado = "";
		
		if(!validarTexto(textoEntrada)){
			alert("El texto a encriptar contiene caracteres inválidos");
		}else{
			
			for(i=0; i<textoEntrada.length; i++){

				if(textoEntrada.charAt(i)=="a"){
					textoEncriptado+="ai";
					continue;
				}
				if(textoEntrada.charAt(i)=="e"){
					textoEncriptado+="enter";
					continue;
				}
				if(textoEntrada.charAt(i)=="i"){
					textoEncriptado+="imes";
					continue;
				}
				if(textoEntrada.charAt(i)=="o"){
					textoEncriptado+="ober";
					continue;
				}
				if(textoEntrada.charAt(i)=="u"){
					textoEncriptado+="ufat";
					continue;
				}
				textoEncriptado+=textoEntrada.charAt(i);
			}
			
			/*			
			textoEncriptado = textoEntrada.replaceAll("a", "ai");
			textoEncriptado = textoEncriptado.replaceAll("e", "enter");
			textoEncriptado = textoEncriptado.replaceAll("i", "imes");
			textoEncriptado = textoEncriptado.replaceAll("o", "ober");
			textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
			*/

			document.getElementById("munheco").style.display = "none";
			document.getElementById("mensajedescriptivo").style.display = "none";
			document.getElementById("textosalida").innerHTML = textoEncriptado;
		}
	}

	function desencriptar(){

		textoPorDesencriptar = document.getElementById("textoentrada").value;
		textoDesencriptado = "";
		/*
		for(i=0; i<textoPorDesencriptar.length; i++){

			if(textoPorDesencriptar.includes("ai", i)){
				textoPorDesencriptar.replace("ai","-");
				textoDesencriptado+="a";
				i++;
				continue;
			}
			if(textoPorDesencriptar.includes("enter", i)){
				textoDesencriptado+="e";
				i+=4;
				continue;
			}
			if(textoPorDesencriptar.includes("imes", i)){
				textoDesencriptado+="i";
				i+=3;
				continue;
			}
			if(textoPorDesencriptar.includes("ober", i)){
				textoDesencriptado+="o";
				i+=3;
				continue;
			}
			if(textoPorDesencriptar.includes("ufat", i)){
				textoDesencriptado+="u";
				i+=3;
				continue;
			}

			textoDesencriptado+=textoPorDesencriptar.charAt(i);
		}

		document.getElementById("textosalida").innerHTML = textoDesencriptado;
		*/
		textoDesencriptado = textoPorDesencriptar.replaceAll("ai", "a");
		textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
		textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
		textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
		textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

		document.getElementById("textosalida").innerHTML = textoDesencriptado;
	}

	function validarTexto(textoEntrada){

		textoEntrada = String(textoEntrada).trim();
		var validador = /^[a-z0-9 ]+$/;
		return validador.test(textoEntrada);
	}
	function copiar(textosalida){

		var aux = document.createElement("input");
		aux.setAttribute("value", document.getElementById("textosalida").innerHTML);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux)
	}
