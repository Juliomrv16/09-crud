


/**
 * URL de mi Base de datos
 * @param {Number} page
 * @returns
 */
export const loadUsersByPage = async( page = 1 ) => {
    //!Funcion que sirve para conectar y recibir la BD
    //*Estamos usando el ".env" para direccionar nuestra URL
    const url =`${ import.meta.env.VITE_BASE_URL }/users?_page=${page}`;
    //*Con el "res", palabra que se usa normalmente para recibir
    //*algo de un json, con feth estamos haciendo la peticion
    const res = await fetch(url);
    //*Creamos la constante data para para guardar json
    const data = await res.json();

    console.log(data);
};