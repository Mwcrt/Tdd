class Vaso {
    constructor(cantidadVasos, contenido) {
        this.cantidadVasos = cantidadVasos;
        this.contenido = contenido;
    }

    hasVasos(cantidadRequerida) {
        return this.cantidadVasos >= cantidadRequerida;
    }

    giveVasos(cantidad) {
        if (this.hasVasos(cantidad)) {
            this.cantidadVasos -= cantidad;
        }
    }
}

class Cafetera {
    constructor(cantidadCafe) {
        this.cantidadCafe = cantidadCafe;
    }

    hasCafe(cantidadRequerida) {
        return this.cantidadCafe >= cantidadRequerida;
    }

    giveCafe(cantidad) {
        if (this.hasCafe(cantidad)) {
            this.cantidadCafe -= cantidad;
        }
    }
}

class Azucarero {
    constructor(cantidadAzucar) {
        this.cantidadAzucar = cantidadAzucar;
    }

    hasAzucar(cantidadRequerida) {
        return this.cantidadAzucar >= cantidadRequerida;
    }

    giveAzucar(cantidad) {
        if (this.hasAzucar(cantidad)) {
            this.cantidadAzucar -= cantidad;
        }
    }
}

class MaquinaDeCafe {
    constructor(cafetera, vasosPequenos, vasosMedianos, vasosGrandes, azucarero) {
        this.cafetera = cafetera;
        this.vasosPequenos = vasosPequenos;
        this.vasosMedianos = vasosMedianos;
        this.vasosGrandes = vasosGrandes;
        this.azucarero = azucarero;
    }

    getTipoVaso(tipo) {
        switch (tipo.toLowerCase()) {
            case "pequeno": return this.vasosPequenos;
            case "mediano": return this.vasosMedianos;
            case "grande": return this.vasosGrandes;
            default: return null;
        }
    }

    getVasoDeCafe(tipoVaso, cantidadVasos, cantidadAzucar) {
        if (!tipoVaso.hasVasos(cantidadVasos)) return "No hay Vasos";
        if (!this.cafetera.hasCafe(tipoVaso.contenido * cantidadVasos)) return "No hay Cafe";
        if (!this.azucarero.hasAzucar(cantidadAzucar)) return "No hay Azucar";

        tipoVaso.giveVasos(cantidadVasos);
        this.cafetera.giveCafe(tipoVaso.contenido * cantidadVasos);
        this.azucarero.giveAzucar(cantidadAzucar);

        return "Felicitaciones";
    }
}

module.exports = { Vaso, Cafetera, Azucarero, MaquinaDeCafe };
