import { User } from "../models/user";

/**
 *  Adaptacion de mis datos para enviarcelo a la base de datos
 * @param {User} user
 */
export const userModelToLocalhost = ( user ) => {
    
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }
};