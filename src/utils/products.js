export const products = [
    { id: 1, title: 'Cocina', category: 'espacios',description: 'La idea es conseguir comodidad, una cocina funcional y aprovechar los espacios al máximo', price:'500', pictureUrl:'https://i.postimg.cc/DS5bjScM/cocinas.jpg',stock: '5' },
    { id: 2, title: 'Espejo', category: 'objetos', description: 'ESPEJO RECTANGULAR ES VIDRIO CRISTAL V.A.S.A 180 X 80 MARCO DE HIERRO INDUSTRIAL 1º CALIDAD', price:'100', pictureUrl:'https://i.postimg.cc/0K0PZwqW/espejolampara.jpg', stock: '1' },
    { id: 3, title: 'Comedor', category: 'espacios', description: 'Con tonos oscuros, madera y mucho metal, el industrial es un estilo que no pasará desapercibido en tu comedor', price:'400', pictureUrl:'https://i.postimg.cc/47tJ702T/comedor.jpg', stock: '4' },
    { id: 4, title: 'Lámpara', category: 'objetos', description: 'Un producto ideal para acompañar la iluminacion de un ambiente y lograr una ambientación adecuada', price:'200', pictureUrl:'https://i.postimg.cc/K32mn5C3/lampara.jpg', stock: '2' }
]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        },2000)
    })
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            return resolve(result);
        },2000)
    })
    return promise
};

export const getCategoryProducts = (categoryId) => {
    const promise = new Promise((resolve) => {
        const result = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
            return resolve(result);
        },2000)
    })
    return promise
};