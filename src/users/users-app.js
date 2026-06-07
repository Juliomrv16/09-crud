import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element
 */
export const UsersApp = async( element ) => {
    //!Funcion que sirve para renderizar la imformacion que
    //!queremos mostrar
    element.innerHTML = 'Loading...'
    await usersStore.loadNextPage();

    console.log( usersStore.getUsers() );
};