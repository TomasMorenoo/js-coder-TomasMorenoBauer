
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

        productName.addEventListener('click', function() {
            window.location.href = `producto.html?id=${product.id}`;
        });

        const productDescription = document.createElement('div');
        productDescription.classList.add('producto-descripcion');

        const productPrice = document.createElement('span');
        productPrice.classList.add('producto-precio');

        if (product.pricePrincipal) {
            const precioAnterior = document.createElement('span');
            precioAnterior.classList.add('precio-anterior');
            precioAnterior.textContent = product.priceSecundary;
            productPrice.appendChild(precioAnterior);

            const precioActual = document.createElement('span');
            precioActual.classList.add('precio-actual');
            precioActual.textContent = product.pricePrincipal || product.priceSecundary;
            productPrice.appendChild(precioActual);
        
            const porcentajeDescuento = document.createElement('span');
            porcentajeDescuento.classList.add('product-porcentaje');
            porcentajeDescuento.textContent = product.porcentaje;
            productPrice.appendChild(porcentajeDescuento);
            
        }

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

function loadProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('productos');
    return storedProducts ? JSON.parse(storedProducts) : [];
}

function saveProductsToLocalStorage(products) {
    localStorage.setItem('productos', JSON.stringify(products));
}

function clearLocalStorage() {
    localStorage.removeItem('productos');
}

fetch('json/productos.json')
    .then(response => response.json())
    .then(data => {
        
        const allProducts = [...loadProductsFromLocalStorage(), ...data.productos];

        
        generateProductGrid(allProducts);

        
        saveProductsToLocalStorage(allProducts);
    })
    .catch(error => console.error('Error al obtener productos:', error));

window.addEventListener('beforeunload', clearLocalStorage);
