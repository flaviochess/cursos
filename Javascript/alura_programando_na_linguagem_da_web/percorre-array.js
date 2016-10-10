function percorreArray (trPacientes, comportamento) {
	
	for (var posicao = 0; posicao < trPacientes.length; posicao ++) {

		var pacienteTr = trPacientes[posicao];
		comportamento(pacienteTr);
	}

}