// IMPORTS
const MongoClient = require('mongodb').MongoClient;

// FUNCTIONS - CONTROLLERS

/**
 * 
 * @param {String} uri : URI de la Base de Datos
 * @param {String} password : Password de la Base de Datos
 * 
 * @return {String} db_uri_complete : URI completa
 */
function db_uri_complete (uri, password) {
    const patron_pass = '<password>';
    return uri.replace(patron_pass, password)
}

/**
 * Devuelve un arreglo con objetos que contiene links de las fuentes de noticias.
 * @param {String} uri : URI completa para conexion con la DB.
 * @return {obj} fuentes : Fuentes con los links de las fuentes de noticias.
 */
const fuentes = (uri) => {
	return new Promise ( (res, rej) => {
		const client = new MongoClient(uri, { useNewUrlParser: true });
		client.connect(function (err, client) {
			if (err) {
				rej(err)
				client.close()
				process.exit(1)
		   }

			const db = client.db('news_sources');
			const collection = db.collection('sources');
			collection.find().toArray( (err, data) => {
				const documentos = [...data]
				res(documentos);
			})

			client.close();
		})
	}
	);
}

/**
 * Funcion de Test, imprimira el texto pasado como argumento
 * @param {String} text : Texto de prueba
 */
function test (text) {
    console.log(text)
}

// EXPORTS
module.exports = {
    db_uri_complete,
    test,
    fuentes
}