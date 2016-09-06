function montaPaciente (pacienteTr) {
	var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
	var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
	var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];

	var paciente = {
		"nome" : tdNome.textContent,
		"peso" : tdPeso.textContent, 
		"altura" : tdAltura.textContent,
		pegaImc : function () {
			if(paciente.altura != 0) {
				return this.peso / (this.altura * this.altura);
			} else {
				console.log('altura não deve ser zero');
			}
		}
	};

	return paciente;
}