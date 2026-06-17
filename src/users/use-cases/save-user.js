import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

/**
 *  Guarda un usuario en el almacenamiento local.
 *  Si el usuario ya tiene un ID, lanza un error porque la actualización local no está implementada.
 *  Si es un usuario nuevo, lo registra localmente.
 *  @param {Like<User>} userLike
 */
export const saveUser = async( userLike ) => {

    const user = new User( userLike );

    if (!user.firstName || !user.lastName )
        throw 'First & last name are required';
        

    const userToSave = userModelToLocalhost( user );

    let userUpdated;
    if ( user.id ) {
        userUpdated =  await updateUser(userToSave);
    } else {
        userUpdated =await createUser( userToSave );
    }

    return localhostUserToModel( userUpdated );
};


/**
 *  Registra un nuevo usuario en el almacenamiento interno.
 *  @param {Like<User>} user
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });
    return newUser;
};
/**
 * 
 * @param {Like<User>} user
 */
const updateUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updateUser = await res.json();
    console.log({ updateUser });
    return updateUser;
};