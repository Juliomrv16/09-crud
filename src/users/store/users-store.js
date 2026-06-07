import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async() => {
    //*Funcion que nos sirve para pedir la informacion de
    //*nuestra base de datos
    //await loadUsersByPage( state.currentPage + 1);
    //*Estamos actualizando nuestro arreglo "users" igresando
    //*los datos que obtenemos de la funcion "loadUsersByPage"
    const users = await loadUsersByPage( state.currentPage + 1);

    //*Despues estamos diciendo que si no obtenemos nada se
    //*detenga la ejecución
    if ( users.length === 0 ) return;

    //*Por ultimo actualizamos nuestro objeto state:
    state.currentPage +=1;
    state.users = users;
};

const loadPreviousPage = () => {
    throw new Error("No implementado");
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