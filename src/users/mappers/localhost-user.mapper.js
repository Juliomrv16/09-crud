import { User } from "../models/user";

/**
 *  Adaptacion de la base de datos al front para evitar
 *  problemas si es que la base de datos tiene algun cambio
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {
    //*En este archivo estamos modificando los nombres de
    //*los datos de nuestra BD, ("first_name", "last_name")
    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
};