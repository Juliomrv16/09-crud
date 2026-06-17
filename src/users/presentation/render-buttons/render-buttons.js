import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";

/**
 *  La funcion crea los botenes, para cambiar de pagina, y un
 *  span que indica en que pagina estamos
 * @param {HTMLDivElement} element
 */
export const renderButtons = ( element ) => {
    
    //*Se inicializa una constante "nexButton" donde 
    //*se crea un boton y despues se indica lo que tendra
    //*escrito
    const nexButton = document.createElement('button')
    nexButton.innerHTML = 'Next >';

    //*Se inicializa una constante "nexButton" donde 
    //*se crea un boton y despues se indica lo que tendra
    //*escrito
    const prevButton = document.createElement('button')
    prevButton.innerHTML = '< Prev';

    //*Se inicializa una constante "currentPageLabel" donde se
    //*crea un "span" con un id "current-page" y su contenido
    //*sera la pagina donde se encuntre nuestros usuarios
    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    element.append( prevButton, currentPageLabel, nexButton);

    //*Ahora indicaremos la logica que debe de seguir nuestros
    //*botones:
    nexButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });

};