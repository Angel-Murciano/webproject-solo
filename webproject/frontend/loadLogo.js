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
    img.alt = 'logo-mercadona';
    document.getElementById('logo').appendChild(img);
})