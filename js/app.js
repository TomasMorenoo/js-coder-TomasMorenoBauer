// Generando variables
let nombreYApellido;
let bienvenida;
let despedida;
let mensajePrincipal;
let stock;
let ropa;
let precio;
let precios;
let color;
let metodoDePago;
let descuento;
let precioParcial;
let precioFinal;
let compra;
let carrito = "";

// Declaración de variable y saludo al usuario
nombreYApellido = prompt("Ingrese su nombre y/o apellido");
bienvenida = `Bienvenido ${nombreYApellido} a Moba deportes. La mejor tienda de ropa en Latinoamérica.`;

// Declaración de variables
mensajePrincipal = "En qué podemos ayudarlo/a el día de hoy:\n1) Ver Ropa \n2) Consultar Stock \n3) Consultar colores \n4) Ver formas de pago \n5) Ver precios\n6) Comprar\n7) Salir hacia la página principal";
stock = "Este es el stock del cual disponemos en este momento:\nShorts: 4\nRemeras: 5\nZapatillas: 3\nPantalones largos: 5";
precio = "Los precios que tenemos son los siguientes:\nShorts: $4,000\nRemeras: $7,000\nZapatillas: $9,500\nPantalones largos: $5,500";
precios = {
    1: 4000,
    2: 7000,
    3: 9500,
    4: 5500
};
ropa = ["Shorts", "Remeras", "Zapatillas", `Pantalones Largos`];
despedida = "Gracias por visitar nuestro menú interactivo...\nRedirigiendo hacia el inicio...";
color = ["Negro", "Blanco", "Azul Francia", "Rosa", "Verde Militar"];
metodoDePago = "Contamos con los siguientes métodos de pago:\n1) 1, 3 y hasta 6 cuotas sin interés con tarjeta de crédito \n2) 10% de descuento en efectivo \n3) Tarjeta de débito";
precioFinal = 0;
precioParcial = 0;

// Código principal
alert(bienvenida);

do {
    opcion = prompt(mensajePrincipal);
    
    switch (opcion) {
        case "1":
        alert(ropa.join("\n"));
        break;
        
        case "2":
        // Consultar stock
        alert(stock);
        break;
        
        case "3":
        // Consultar colores
        alert(color.join("\n"));
        break;
        
        case "4":
        // Formas de pago
        alert(metodoDePago);
        break;
        
        case "5":
        // Precios de los productos
        alert(precio);
        break;
        
        case "6":
        do {
            let realizarNuevaCompra = true;
            
            do {
                opcionA = parseInt(prompt(`Disponemos de las siguientes opciones:\n1) Shorts\n2) Remeras\n3) Zapatillas\n4) Pantalon Largo\n¿Qué producto desea comprar?`));
                
                if (!isNaN(opcionA) && opcionA >= 1 && opcionA <= 4) {
                    break; // Salir del bucle si la opciónA es válida
                } else {
                    alert("Por favor, ingrese un número válido entre 1 y 4.");
                }
            } while (true);
            
            do {
                // Mostrar las opciones de color con las asignaciones específicas
                opcionB = parseInt(prompt(`¿De qué color desea su producto?\n1) Negro\n2) Blanco\n3) Azul Francia\n4) Rosa\n5) Verde Militar`));
                
                if (!isNaN(opcionB) && opcionB >= 1 && opcionB <= 5) {
                    break; // Salir del bucle si la opciónB es válida
                } else {
                    alert("Por favor, ingrese un número válido entre 1 y 5.");
                }
            } while (true);
            
            // Calcular el precio del producto seleccionado
            let precioProducto = precios[opcionA];
            precioParcial += precioProducto;
            
            // Agregar la compra al carrito
            carrito += `${ropa[opcionA - 1]} ${color[opcionB - 1]} $${precioProducto}\n`;
            
            // Mostrar el carrito de compras acumulado
            alert(`Carrito de compras:\n${carrito}`);
            
            // Mostrar el precio parcial
            alert(`Precio parcial: $${precioParcial}`);
            
            // Preguntar al usuario si desea realizar una nueva compra
            const respuesta = prompt("¿Desea realizar una nueva compra? (Sí/No)").toLowerCase();
            
            // Verificar la respuesta del usuario
            if (respuesta !== 'si') {
                // Preguntar al usuario la forma de pago
                const formaDePago = parseInt(prompt(`${metodoDePago}\nSeleccione la forma de pago (1, 2 o 3)`));
                
                // Realizar acciones según la forma de pago seleccionada
                switch (formaDePago) {
                    case 1:
                    // Precio final para tarjeta de crédito
                    const resultadoParcial = precioParcial.toFixed(2);
                    const cuota1 = resultadoParcial;
                    const cuota3 = (resultadoParcial / 3).toFixed(2);
                    const cuota6 = (resultadoParcial / 6).toFixed(2);
                    
                    alert(`Precio final para tarjeta de crédito:
                    En una cuota: $${cuota1}
                    En tres cuotas: $${cuota3} por cuota
                    En seis cuotas: $${cuota6} por cuota`);
                    
                    break;
                    
                    case 2:
                    // Precio final para pago en efectivo con descuento del 10%
                    descuento = precioParcial * 0.9;
                    alert(`Este es el precio final pagando en efectivo: $${descuento.toFixed(2)}\nPrecio anterior: $${precioParcial}`);
                    break;
                    
                    case 3:
                    alert(`Se mantiene el mismo precio $${precioParcial}`)
                    break;
                    
                    default:
                    alert("Forma de pago no válida.");
                    break;
                }
                
                break; // Salir del bucle de compras
            }
        } while (true);
        
        break;
        
        case "7":
        // Salir
        alert(despedida);
        break;
        
        default:
        alert("Opción no válida");
        break;
    }
} while (opcion !== "7");
