import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table";

/**
 *  Funcion que renderiza lo que queremos en nuestra pagina web
 * @param {HTMLDivElement} element
 */
export const UsersApp = async( element ) => {
    //!Funcion que sirve para renderizar la imformacion que
    //!queremos mostrar
    element.innerHTML = 'Loading...'
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable( element );
};