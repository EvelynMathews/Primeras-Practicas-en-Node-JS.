exports.signo = function(m,d){

	let day = parseInt(d);

	//VALIDACION

	if(isNaN(day)){return "Ingrese un día válido";}

	switch(m){

		case '1': 
			if( day >= 20){

				return "Acuario";
			
			}else{

				return "Capricornio";
			}

		break;

		case '2': 
			if( day > 21){

				return "Piscis";
			
			}else{

				return "Acuario";
			}

		break;


		case '3': 
			if( day > 23){

				return "Aries";
			
			}else{

				return "Piscis";
			}

		break;

		case '4': 
			if( day > 19){

				return "Tauro";
			
			}else{

				return "Aries";
			}

		break;

		case '5': 
			if( day > 20){

				return "Geminis";
			
			}else{

				return "Tauro";
			}

		break;

		case '6': 
			if( day > 20){

				return "Cancer";
			
			}else{

				return "Geminis";
			}

		break;

		case '7': 
			if( day > 22){

				return "Leo";
			
			}else{

				return "Cancer";
			}

		break;


		case '8': 
			if( day > 22){

				return "Virgo";
			
			}else{

				return "Leo";
			}

		break;
		

		case '9': 
			if( day > 23){

				return "Libra";
			
			}else{

				return "Virgo";
			}

		break;
			
			case '10': 
			if( day > 22){

				return "Escorpio";
			
			}else{

				return "Libra";
			}

		break;

			case '11': 
			if( day > 22){

				return "Sagitario";
			
			}else{

				return "Escorpio";
			}

		break;


		case '12': 
			if( day > 22){

				return "Capricornio";
			
			}else{

				return "Sagitario";
			}

		break;

		default:
				return "Ingrese un mes valido";
		break;		
	

	}

}