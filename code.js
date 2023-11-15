
// const tarea1 = document.querySelector('.tarea1');
// const textoDesplegado = document.querySelector('.textoDesplegado');

// tarea1.addEventListener('click', function() {
//     if (textoDesplegado.style.display === 'none' || textoDesplegado.style.display === '') {
//         textoDesplegado.textContent = 'Esta es la primer tarea a realizar.';
//         textoDesplegado.style.display = 'block';
//     } else {
//         textoDesplegado.style.display = 'none';
//     }
//     textoDesplegado2.style.display = 'none';
//     textoDesplegado3.style.display = 'none';
// });

// const tarea2 = document.querySelector('.tarea2');
// const textoDesplegado2 = document.querySelector('.textoDesplegado2');

// tarea2.addEventListener('click', function(){
//     if (textoDesplegado2.style.display === 'none' || textoDesplegado2.style.display === '') {
//         textoDesplegado2.textContent = 'Esta es la segunda tarea';
//         textoDesplegado2.style.display = 'block';
//     } else {
//         textoDesplegado2.style.display = 'none';
//     }
//     textoDesplegado.style.display = 'none';
//     textoDesplegado3.style.display = 'none';
// });

// const tarea3 = document.querySelector('.tarea3');
// const textoDesplegado3 = document.querySelector('.textoDesplegado3');

// tarea3.addEventListener('click', function(){
//     if (textoDesplegado3.style.display === 'none' || textoDesplegado3.style.display === '') {
//         textoDesplegado3.textContent = 'Esta es la tarea numero 3 para realizar';
//         textoDesplegado3.style.display = 'block';
//     } else {
//         textoDesplegado3.style.display = 'none';
//     }
//     textoDesplegado.style.display = 'none';
//     textoDesplegado2.style.display = 'none';
// });


const imagenes = [
    '../imagenes/taza1.jpeg',
    '../imagenes/taza2.jpeg',
    '../imagenes/taza3.jpeg',
    '../imagenes/taza4.jpeg',
    '../imagenes/taza5.jpeg'
];
// Recuperar el carrito desde localStorage al cargar la página
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];


document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const busqueda = document.querySelector('.aq').value.toLowerCase();
    const resultadoBusqueda = document.querySelector('.resultadoBusqueda1');
    if (busqueda.includes('taza')) {
        resultadoBusqueda.innerHTML = imagenes
            .filter(imagen => imagen.toLowerCase().includes(busqueda))
            .map(imagen => `
                <div class="producto">
                    <img src="${imagen}" alt="Taza">
                    <button onclick="agregarAlCarrito('${imagen}')">Agregar al Carrito</button>
                </div>
            `)
            .join('');
    } else {
        resultadoBusqueda.innerHTML = "No se encontraron resultados";
    }
});

function agregarAlCarrito(imagen) {
    //pushear la imagen dentro del array del carrito
    carrito.push(imagen);
    console.log(`Imagen agregada al carrito: ${imagen}`);
    
    localStorage.setItem('carrito', JSON.stringify(carrito));


    actualizarCarrito();
};

function actualizarCarrito() {
    // Accede a la etiqueta que tengo definida en el carrito donde va a insertar un nuevo nodo
    const etiquetaCarrito = document.querySelector('.carrito');
    // Vaciar posibles elementos del carrito
    etiquetaCarrito.innerHTML = '';
    // Va agregando las imágenes a las que se les hace clic
    carrito.forEach(imagen => {
        const nodoNuevo = document.createElement('div');
        nodoNuevo.innerHTML = `
            <div class="carritoAnidado">
                <img src="${imagen}" alt="Taza en el carrito">
            </div>
        `;
        etiquetaCarrito.appendChild(nodoNuevo);
    });
}






