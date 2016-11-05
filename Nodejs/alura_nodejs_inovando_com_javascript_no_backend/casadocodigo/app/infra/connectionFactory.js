var mysql = require('mysql');

var connectMySQL = function() {
	return mysql.createConnection({
		user : 'root',
		password : '',
		host: 'localhost',
		database: 'casadocodigo_nodejs'
	});
}

module.exports = function () {
	return connectMySQL;
}