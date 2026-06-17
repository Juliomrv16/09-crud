import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";


/**
 *  Nos da el usuario que hemos selecionado
 * @param {String|Number} page
 * @returns { promise<User> }
 */
export const getUserById = async( id ) => {
    const url =`${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url);
    const data = await res.json();
    const user = localhostUserToModel( data );
    return user;
};
