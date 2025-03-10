const comicNum = document.getElementById("comic-Num")
const comic = document.getElementById("comic")
const proxyurl = "https://cors-anywhere.herokuapp.com/";

//ESTA CONEXIÓN ME HA COSTADO MÁS YA QUE DABA UN PROBLEMA DE CORS Y PROXIES.
//LO SOLUCIONÉ CON UNA Lista de proxies CORS gratuitos QUE ENCONTRÉ:
// https://www.reddit.com/r/webdev/comments/1ii43ns/list_of_free_cors_proxies/?tl=es-es&rdt=65530


function getData() {
    fetch(`https://api.allorigins.win/get?url=https://xkcd.com/${comicNum.value}/info.0.json`)
        .then(response => {
            if (response.ok) return response.json()
            throw new Error('Network response was not ok.')
        })
        .then(function printObject(data) {

            //PARSEO EL RESULTADO
            const obj = JSON.parse(data.contents);
            if (data) {
                comic.innerHTML =
                    `<div class="image-container">
                    <img src="${obj.img}" alt="${obj.alt}" width="100%">
                </div>
                <div class="txt-container">
                    <h3>Fecha de publicación: ${obj.day}/${obj.month}/${obj.year}</h3>
                    <h3>Título: ${obj.title}</h3>
                </div>`
            }
            //SI NO HAY RESULTADO EN LA BÚSQUEDA
            else { comic.innerHTML = `<h3>El comic número: ${comicNum.value} no existe, ¡prueba otra vez!</h3>` }
        })
}

//3. xkxd: Crea una página con un input de texto que le pida al usuario un número. Al apretar un botón, se le hace una petición a la
//API de xkcd, y muestra al usuario el cómic de ese número, la fecha de publicación y el titulo.
