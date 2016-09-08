var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {

	event.preventDefault();

	var nome = document.querySelector('#campo-nome');
	var peso = document.querySelector('#campo-peso');
	var altura = document.querySelector('#campo-altura');

	var pacienteNovo = "<tr class='paciente'>" +
						"<td class='info-nome'>"+ nome.value +"</td>" +
						"<td class='info-peso'>"+ peso.value +"</td>" +
						"<td class='info-altura'>"+ altura.value +"</td>" +
						"<td class='info-imc'></td>" +
					"</tr>";

	var todosPacientes = document.querySelector('table');
	todosPacientes.innerHTML += pacienteNovo;

	var formPaciente = document.querySelector('form');
	formPaciente.reset();

	var botaoCalculaImc = document.querySelector('#calcula-imcs');
	botaoCalculaImc.click();
});