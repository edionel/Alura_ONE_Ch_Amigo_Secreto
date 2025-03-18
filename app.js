// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí queda desarrollada la lógica para resolver el problema.

// Declarar un array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    nombreInput.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la visualización de la lista
    nombreInput.focus(); // Retornar el foco al campo de entrada
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    // Iterar sobre el array de amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el DOM
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    resultado.classList.add('visible'); // Agregar clase visible para la transición
}

// Agregar evento para el campo de texto para permitir agregar con Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
