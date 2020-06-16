document.addEventListener('DOMContentLoaded', async () => {
    // Seleccion de Elementos
    const contenedorNoticias = document.querySelector('#contenedor_noticias');

    // Seteos
    contenedorNoticias.classList.add('contenedor_noticias');

    // Variables y Constantes
    const CANTIDAD_NOTICIAS = 24;
    const URL = 'https://meifius.run.goorm.io/api/v0.1/news';

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
				// Conversion de JSON a OBJ JS
                let newsArray = JSON.parse(this.responseText);
				
				// Test
				console.log(newsArray);
				
				newsArray.forEach( (noti, index, array) => {
					let noticiaInfo = array[(array.length - index -1)];
					
					let noticia = document.createElement('div');
					noticia.classList.add('celda_noticia');
					
					let fuente = document.createElement('p');
					fuente.innerHTML = noticiaInfo.fuente[0].toUpperCase() +  noticiaInfo.fuente.slice(1);
					fuente.classList.add('fuente');
					noticia.appendChild(fuente);
					
					let titulo = document.createElement('p');
					titulo.innerHTML = noticiaInfo.titulo;
					titulo.classList.add('titulo');
					noticia.appendChild(titulo);
					
					let link = document.createElement('a');
					link.innerHTML = 'Link Noticia';
					link.setAttribute("href", noticiaInfo.link);
					link.classList.add('link');
					noticia.appendChild(link);
					
					
					// Añade dentro de Contenedor de noticias un elemento noticia
					contenedorNoticias.appendChild(noticia);
				} );
            }
        });

        xmlhttp.open("GET", url, true);

        xmlhttp.send();
    }
    
    
    //-----------------------------------------------------------------------
});