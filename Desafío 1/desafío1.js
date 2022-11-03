class Container {
    #array;

    constructor() {
        this.#array = [];
    }

    save(id, title, price, url) {
        const obj = {
            id: id,
            title: title,
            price: price,
            thumbnail: url
        }
        this.#array.push(obj);
    }

    getAll() {
        return this.#array;
    }

    getById(id) {
        if(this.#array.find(element => element.id === id)){
            return this.#array.find(element => element.id === id);
        }
        return null;
    }

    deleteById(id) {
        if(this.#array.map(obj => obj.id).indexOf(id) >= 0){ 
            let index = this.#array.map(obj => obj.id).indexOf(id);
            this.#array.splice(index,1);
        }else{
            console.log('Objeto no encontrado');
        }
    }

    deleteAll() {
        this.#array = [];
    }
}
const zapatillas = new Container();

zapatillas.save(1, 'zapatillas1', 20500, 'www.zapatillas1.com');
zapatillas.save(2, 'zapatillas2', 24000, 'www.zapatillas2.com');
zapatillas.save(3, 'zapatillas3', 32000, 'www.zapatillas3.com');
console.log(zapatillas.getAll());  
/* Muestra los objetos cargados en el arreglo */

console.log(zapatillas.getById(1));
/* Si encuentra el objeto lo retorna, si no devuleve null */

zapatillas.deleteById(1);
/* Si encuentra el objeto, lo elimina del arreglo */
console.log(zapatillas.getAll());

zapatillas.deleteAll();
/* vacia el arreglo */

console.log(zapatillas.getAll());