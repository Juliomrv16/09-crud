import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

/**
 *  Carga la siguiente página de usuarios y actualiza el estado
 *  global.
 *  @async
 *  @function loadNextPage
 *  @returns {Promise<void>}
 */
const loadNextPage = async() => {
    //*Funcion que nos sirve para pedir la informacion de
    //*nuestra base de datos
    //await loadUsersByPage( state.currentPage + 1);
    //*Estamos actualizando nuestro arreglo "users" igresando
    //*los datos que obtenemos de la funcion "loadUsersByPage"
    const users = await loadUsersByPage( state.currentPage + 1);

    //*Debido a las actualizaciones tenemos que implementar la
    //*Siguiente implemenetacón
    if ( state.currentPage >= 5 ) return;

    //*Por ultimo actualizamos nuestro objeto state:
    state.currentPage +=1;
    state.users = users;
};



const loadPreviousPage = async() => {
    if ( state.currentPage <= 1 ) return;
    const users = await loadUsersByPage( state.currentPage - 1);
    state.currentPage -=1;
    state.users = users;
};

const onUserChanged = () => {
    throw new Error("No implementado");
};

const reloadPage = () => {
    throw new Error("No implementado");
};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     *  Obtiene una copia de la lista actual de usuarios
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     *  Obtiene la pagina en donde se encuentra (1 al 5)
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}