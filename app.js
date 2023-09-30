function obtenerChiste() {
    // URL de la API de chistes en español
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?lang=es';

    // Elemento donde se mostrará el chiste
    const chisteElement = document.getElementById('chiste');

    // Realizar una solicitud GET a la API de chistes
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la respuesta de la API de chistes.');
            }
            return response.json();
        })
        .then(data => {
            // Verificar si la respuesta tiene un chiste
            if (data.joke) {
                // Mostrar el chiste en el elemento HTML
                chisteElement.textContent = data.joke;
            } else if (data.setup && data.delivery) {
                // Si la respuesta tiene una estructura diferente (setup y delivery), mostrar el chiste
                chisteElement.textContent = `${data.setup} ${data.delivery}`;
            } else {
                // Si no hay chistes disponibles en ninguna de las estructuras, mostrar un mensaje de error
                chisteElement.textContent = 'No se encontraron chistes en la respuesta.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
