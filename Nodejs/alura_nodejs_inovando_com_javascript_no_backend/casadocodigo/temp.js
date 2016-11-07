var http = require('http');

var requisicao = {
	hostname : 'localhost',
	port: 3000,
	path: '/produtos',
	method: 'POST',
	headers : {
		'Accept' : 'application/json',
		'Content-type' : 'application/json'
	}
};

var req = http.request(requisicao, function (res) {
	console.log(res.statusCode);
	res.on('data', function(body){
		console.log('' + body);
	});
});

var livro = {
	titulo : 'Via terminal',
	descricao: 'Aprenda como fazer um post via terminal',
	preco: 50
}

req.end(JSON.stringify(livro));