function agregarTarjetasALaGaleria() {
    // Obtén el contenedor de la galería
    var galeria = document.querySelector('.galeria');

    var productos = [
        {
            imagen: './assets/fotos/productos/SG845128-1.jpg',
            titulo: 'pelota agregada con js 1',
            precio: '$100.000.000,00',
            oferta: '10% OFF',
            descripcion: 'Llevá tu juego a otro nivel con la Pelota Básquet Spalding Varsity número 7.'
        },
        {
            imagen: './assets/fotos/productos/SG845128-1.jpg',
            titulo: 'pelota agregada con js 2',
            precio: '$100.000.000,00',
            oferta: '10% OFF',
            descripcion: 'Llevá tu juego a otro nivel con la Pelota Básquet Spalding Varsity número 7.'
        },
        {
            imagen: './assets/fotos/productos/SG845128-1.jpg',
            titulo: 'pelota agregada con js 3',
            precio: '$100.000.000,00',
            oferta: '10% OFF',
            descripcion: 'Llevá tu juego a otro nivel con la Pelota Básquet Spalding Varsity número 7.'
        },
        {
            imagen: './assets/fotos/productos/SG845128-1.jpg',
            titulo: 'pelota agregada con js 4',
            precio: '$100.000.000,00',
            oferta: '10% OFF',
            descripcion: 'Llevá tu juego a otro nivel con la Pelota Básquet Spalding Varsity número 7.'
        },
    ];
    productos.forEach(function(producto) {
        var tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        tarjeta.style.width = '16.5rem';
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" class="img-product" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <div class="producto-descripcion">
                    <span class="producto-precio">${producto.precio}</span>
                    <span class="oferta">${producto.oferta}</span>
                    <p>${producto.descripcion}</p>
                </div>
                <a href="#" class="btn btn-primary">Comprar</a>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        `;
        galeria.appendChild(tarjeta);
    });
}

function restringirNumeroDeLineas() {
    var contenedores = document.querySelectorAll('.producto-descripcion p');
    contenedores.forEach(function (contenedor) {
        var lineHeight = parseInt(window.getComputedStyle(contenedor).lineHeight);
        var maxHeight = lineHeight * 2;
        while (contenedor.offsetHeight > maxHeight) {
            contenedor.textContent = contenedor.textContent.replace(/\s+\S*$/, '...');
        }
    });
}

function restringirAlturaTitulo() {
    var tarjetas = document.querySelectorAll('.card-title');
    tarjetas.forEach(function(titulo) {
        var alturaMaxima = 1.5 * parseFloat(getComputedStyle(titulo).lineHeight);
        titulo.style.maxHeight = alturaMaxima + 'px';
        titulo.style.overflow = 'hidden';
        titulo.style.textOverflow = 'ellipsis';
        titulo.style.whiteSpace = 'nowrap';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    agregarTarjetasALaGaleria();
    restringirNumeroDeLineas();
    restringirAlturaTitulo();
});
