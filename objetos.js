var miAuto = {
    marca: "Totota",
    modelo: "Corolla",
    annio: 2017,
    detalleAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto;
miAuto.marca;
miAuto.modelo;
miAuto.annio;
miAuto.detalleAuto();

function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalleAuto = function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

var miAuto = new Auto("Toyota", "Corolla", 2020);