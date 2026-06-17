import { User } from "../models/user";
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
    // const pages = await pageActual(state.currentPage + 1);
    //*Debido a las actualizaciones tenemos que implementar la
    //*Siguiente implemenetacón
    // if ( state.currentPage === users. ) return;

    if (users.length === 0) return;

    //*Por ultimo actualizamos nuestro objeto state:
    state.currentPage +=1;
    state.users = users;
};



const loadPreviousPage = async() => {
    if ( state.currentPage === 1 ) return;
    const users = await loadUsersByPage( state.currentPage - 1);
    
    state.users = users;
    state.currentPage -=1;
};

/**
 * @param {User} updatedUser 
 */
const onUserChanged = ( updatedUser ) => {

    let wasFound = false;
    state.users = state.users.map( user => {
        if ( user.id === updatedUser.id) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    });

    if (state.users.length < 10 && !wasFound ) {
        state.users.push( updatedUser )
    }
};

const reloadPage = async() => {
    const users = await loadUsersByPage( state.currentPage );
    if (users.length === 0) {
        await loadPreviousPage();
        return;
    }
    state.users = users;
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