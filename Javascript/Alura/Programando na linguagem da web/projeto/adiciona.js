var pacienteNovo = "<tr class='paciente'>" +
						"<td class='info-nome'>Flavio</td>" +
						"<td class='info-peso'>71</td>" +
						"<td class='info-altura'>1.71</td>" +
						"<td class='info-imc'></td>" +
					"</tr>";

var todosPacientes = document.querySelector('table');
todosPacientes.innerHTML += pacienteNovo;