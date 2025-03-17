// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí queda desarrollada la lógica para resolver el problema.

// Declaramos un array para almacenar los nombres de los amigos
let amigos = [];

// Definimos la función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    // Validamos la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validamos nombres duplicados (si mal no recuerdo no la pidieron pero jajaja)
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar un nombre al array
    amigos.push(nombre);
    nombreInput.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la visualización de la lista
}

// Función para actualizar la lista de los amigos en el DOM
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
