// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: "#root",
        data: {
            h1message: "Vue text",
            vImg: "https://picsum.photos/200",
        }
    }
);