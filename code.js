
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
    '../imagenes/taza.jpeg',
    '../imagenes/taza2.jpeg'
];

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const busqueda = document.querySelector('.aq').value.toLowerCase();
    const resultadoBusqueda = document.querySelector('.resultadoBusqueda1');

    resultadoBusqueda.innerHTML = imagenes
    .filter(imagen => imagen.toLowerCase().includes(busqueda)).map(imagen => `<img src="${imagen}" alt="Taza">`).join('');
});


