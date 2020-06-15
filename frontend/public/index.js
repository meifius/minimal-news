document.addEventListener('DOMContentLoaded', async () => {
    // Seleccion de Elementos
    const contenedorNoticias = document.querySelector('#contenedor_noticias');

    // Seteos
    contenedorNoticias.classList.add('contenedor_noticias');

    // Variables y Constantes
    const CANTIDAD_NOTICIAS = 24;
    const URL = '';

    // Programa Principal
    crearNoticias(contenedorNoticias, CANTIDAD_NOTICIAS);
    solicitarNoticias(URL);

    //-----------------------------------------------------------------------
    //-----------------------------------------------------------------------
    
    // Funciones
    
    /**
     * 
     * @param {DOM Element} contenedor :
     * @param {Number} cantidad :
     */
    function crearNoticias (contenedor, cantidad) {
        console.log('Creando Noticias...');
    }

    /**
     * 
     * @param {String} url : URL de la API de Noticias
     */
    function solicitarNoticias (url) {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.addEventListener("load", function() {
            if (this.status == 200) {
                console.log(this.responseText);
            }
        });

        xmlhttp.open("GET", url, true);

        xmlhttp.send();
    }
    
    
    //-----------------------------------------------------------------------
});