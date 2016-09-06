var botao = document.getElementById('calcula-imcs');
botao.addEventListener('click', function () {
	var trPacientes = document.getElementsByClassName('paciente');

	percorreArray(trPacientes, function (pacienteTr) {

		var pacienteAtual = montaPaciente(pacienteTr);
		var imc = pacienteAtual.pegaImc();
		var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
		tdImc.textContent = imc;
		
		console.log(imc);
	});
});