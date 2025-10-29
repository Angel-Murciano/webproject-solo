// Esperar a que la página se estructure (ASÍ ES MEJOR!)
document.addEventListener('DOMContentLoaded', () => {
    // Obtener logo
    fetch('images/logo.png')
    // Transformar en blob si se obtuvo bien
    .then(response => {
        if(!response.ok) throw new Error('No se pudo cargar la imagen correctamente.');
        return response.blob();
    })
    // Crear elemento img para poner en el header
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'logo';
        img.style.width = "300px";
        img.style.height = "auto";
        img.style.mixBlendMode = 'screen';
        img.className = 'img-fluid';
        document.getElementById('logo').appendChild(img);
    })
});
