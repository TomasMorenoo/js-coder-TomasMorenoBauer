window.onload = function() {
    alert('¡La página se ha cargado correctamente!');
}
const products = [
    { id: 1, name: 'Zapatillas Deportivas', image: '', price: '$49.99', details: 'Zapatillas deportivas cómodas y elegantes.' },
    { id: 2, name: 'Reloj Inteligente', image: 'https://example.com/reloj.jpg', price: '$99.99', details: 'Reloj inteligente con funciones avanzadas.' },
];

function generateProductGrid(products) {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');

        const productLink = document.createElement('a');
        productLink.href = `producto.html?id=${product.id}`;
        productLink.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: ${product.price}</p>
        `;

        productContainer.appendChild(productLink);
        productGrid.appendChild(productContainer);
    });
}

generateProductGrid(products);
