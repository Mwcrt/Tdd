const { Vaso, Cafetera, Azucarero, MaquinaDeCafe } = require('./maquinaCafe');

describe("Máquina de Café", () => {
    let maquina, cafetera, vasosPequenos, vasosMedianos, vasosGrandes, azucarero;

    beforeEach(() => {
        cafetera = new Cafetera(50);
        vasosPequenos = new Vaso(5, 10);
        vasosMedianos = new Vaso(5, 20);
        vasosGrandes = new Vaso(5, 30);
        azucarero = new Azucarero(20);

        maquina = new MaquinaDeCafe(cafetera, vasosPequenos, vasosMedianos, vasosGrandes, azucarero);
    });

    test("Debe devolver el vaso pequeño", () => {
        expect(maquina.getTipoVaso("pequeno")).toBe(vasosPequenos);
    });

    test("Debe devolver 'No hay Vasos'", () => {
        let vaso = maquina.getTipoVaso("pequeno");
        let resultado = maquina.getVasoDeCafe(vaso, 10, 2);
        expect(resultado).toBe("No hay Vasos");
    });

    test("Debe devolver 'No hay Cafe'", () => {
        maquina.cafetera = new Cafetera(5);
        let vaso = maquina.getTipoVaso("pequeno");
        let resultado = maquina.getVasoDeCafe(vaso, 1, 2);
        expect(resultado).toBe("No hay Cafe");
    });

    test("Debe devolver 'No hay Azucar'", () => {
        maquina.azucarero = new Azucarero(2);
        let vaso = maquina.getTipoVaso("pequeno");
        let resultado = maquina.getVasoDeCafe(vaso, 1, 3);
        expect(resultado).toBe("No hay Azucar");
    });

    test("Debe restar café", () => {
        let vaso = maquina.getTipoVaso("pequeno");
        maquina.getVasoDeCafe(vaso, 1, 3);
        expect(maquina.cafetera.cantidadCafe).toBe(40);
    });

    test("Debe restar vasos", () => {
        let vaso = maquina.getTipoVaso("pequeno");
        maquina.getVasoDeCafe(vaso, 1, 3);
        expect(maquina.vasosPequenos.cantidadVasos).toBe(4);
    });

    test("Debe restar azúcar", () => {
        let vaso = maquina.getTipoVaso("pequeno");
        maquina.getVasoDeCafe(vaso, 1, 3);
        expect(maquina.azucarero.cantidadAzucar).toBe(17);
    });

    test("Debe devolver 'Felicitaciones'", () => {
        let vaso = maquina.getTipoVaso("pequeno");
        let resultado = maquina.getVasoDeCafe(vaso, 1, 3);
        expect(resultado).toBe("Felicitaciones");
    });
});
