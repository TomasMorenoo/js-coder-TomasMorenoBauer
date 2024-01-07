function generateProductGrid(products) {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('card');
        productContainer.style.width = '16.5rem';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.classList.add('img-product');
        productImage.alt = '...';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const productName = document.createElement('h5');
        productName.classList.add('card-title');
        productName.textContent = product.name;

        // Agregar evento de clic al título para redireccionar a la página "producto.html"
        productName.addEventListener('click', function() {
            window.location.href = `producto.html?id=${product.id}`;
        });

        const productDescription = document.createElement('div');
        productDescription.classList.add('producto-descripcion');

        const productPrice = document.createElement('span');
        productPrice.classList.add('producto-precio');
        productPrice.textContent = product.price;

        const productOffer = document.createElement('span');
        productOffer.classList.add('oferta');
        // Agregar lógica para la oferta si es necesario

        const productDetails = document.createElement('p');
        productDetails.textContent = product.details;

        const buyButton = document.createElement('a');
        buyButton.href = '#';
        buyButton.classList.add('btn', 'btn-primary');
        buyButton.textContent = 'Comprar';

        const addToCartButton = document.createElement('a');
        addToCartButton.href = '#';
        addToCartButton.classList.add('btn', 'btn-primary');
        addToCartButton.textContent = 'Agregar al carrito';

        productDescription.appendChild(productPrice);
        productDescription.appendChild(productOffer);
        productDescription.appendChild(productDetails);

        cardBody.appendChild(productName);
        cardBody.appendChild(productDescription);
        cardBody.appendChild(buyButton);
        cardBody.appendChild(addToCartButton);

        productContainer.appendChild(productImage);
        productContainer.appendChild(cardBody);

        productGrid.appendChild(productContainer);
    });
}

const products = [
    { id: 1, name: 'Pack x3 medias Nike', image: 'assets/fotos/productos/medias1.jpg', price: '$49.99', details: 'Zapatillas deportivas cómodas y elegantes.' },
    { id: 2, name: 'Reloj Inteligente', image: 'assets/fotos/productos/medias1.jpg', price: '$99.99', details: 'Reloj inteligente con funciones avanzadas.' },
    { id: 3, name: 'Zapatillas Deportivas', image: 'assets/fotos/productos/medias1.jpg', price: '$49.99', details: 'Zapatillas deportivas cómodas y elegantes.' },
    { id: 4, name: 'Reloj Inteligente', image: 'assets/fotos/productos/medias1.jpg', price: '$99.99', details: 'Reloj inteligente con funciones avanzadas.' },
    { id: 5, name: 'Pack x3 medias Nike', image: 'assets/fotos/productos/medias1.jpg', price: '$49.99', details: 'Zapatillas deportivas cómodas y elegantes.' },
    { id: 6, name: 'Reloj Inteligente', image: 'assets/fotos/productos/medias1.jpg', price: '$99.99', details: 'Reloj inteligente con funciones avanzadas.' },
    { id: 7, name: 'Zapatillas Deportivas', image: 'assets/fotos/productos/medias1.jpg', price: '$49.99', details: 'Zapatillas deportivas cómodas y elegantes.' },
    { id: 8, name: 'Reloj Inteligente', image: 'assets/fotos/productos/medias1.jpg', price: '$99.99', details: 'Reloj inteligente con funciones avanzadas.' },
];

generateProductGrid(products);
