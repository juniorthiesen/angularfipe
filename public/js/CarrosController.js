function CarrosController($scope, $http) {
 
  function Veiculo() {
    this.marca = '';
    this.modelo = '';
    this.ano = '';
    this.preco = '';
    this.fipe_codigo = '';
  }
 
  $scope.veiculo = new Veiculo();
 
  $scope.veiculos = [];

    $http.get('/veiculos').success(function(retorno) {
    $scope.veiculos = retorno.veiculos;
  });
 
  $scope.adicionaVeiculo = function() {
    $http.post('/veiculo', $scope.veiculo).success(function() {
      $scope.veiculos.push($scope.veiculo);
      $scope.veiculo = new Veiculo();
    });
  }
}