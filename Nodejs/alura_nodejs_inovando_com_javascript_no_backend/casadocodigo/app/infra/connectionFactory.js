var mysql = require('mysql');

var connectMySQL = function() {

	if(!process.env.NODE_ENV) {
		return mysql.createConnection({
			user : 'root',
			password : '',
			host: 'localhost',
			database: 'casadocodigo_nodejs'
		});
	}

	if(process.env.NODE_ENV == 'test') {
		return mysql.createConnection({
			user : 'root',
			password : '',
			host: 'localhost',
			database: 'casadocodigo_nodejs_testes'
		});	
	}
}

module.exports = function () {
	return connectMySQL;
}