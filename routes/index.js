
/*
 * GET home page.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fipe');
var Schema = mongoose.Schema;

var veiculoSchema = new Schema({
	marca: { type: String, required: true },
	modelo: { type: String, required: true },
	ano: { type: String, required: true },
	preco: { type: String, required: true },
	fipe_codigo: { type: String, required: true }
});

var Veiculo = mongoose.model('veiculo', veiculoSchema);
var conexoes = 0;

exports.index = function(req, res){
	conexoes++;
	console.log(conexoes);
	res.render('index', { title: 'Express' });
};

exports.adicionaVeiculo = function(req, res) {
	var veiculo = new Veiculo(req.body);
	veiculo.save(function(error, veiculo) {
		if(error) res.send(500);

		res.send(201);
	});
}

exports.listaVeiculos = function(req, res) {
	Veiculo.find({}, function(error, veiculos) {
		if(error) res.send(500);

		res.json({ veiculos: veiculos });
	});
}