var express = require('../config/express')();
var request = require('supertest')(express);
var DatabaseCleaner = require('database-cleaner');

describe('#ProdutoController', function () {

	beforeEach(function(done){
		var databaseCleaner = new DatabaseCleaner('mysql');
		databaseCleaner.clean(express.infra.connectionFactory(), done);
	});

	it('#listagem json', function(done) {

		request.get('/produtos')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200, done);

	});

	it('#cadastro de produtos invalido', function(done) {

		var produtoInvalido = {titulo : "", descricao : "Livro errado"};
		
		request.post('/produtos')
		.send(produtoInvalido)
		.expect(400, done);
	});

	it('#cadastro de produtos correto', function(done) {
		var produto = {titulo : "Novinho", descricao : "Livro novinho", preco : 34.50};

		request.post('/produtos')
		.send(produto)
		.expect(302, done);
	});
});