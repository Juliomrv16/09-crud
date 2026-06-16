import { User } from "../models/user";

/**
 *  Guarda un usuario en el almacenamiento local.
 *  Si el usuario ya tiene un ID, lanza un error porque la actualización local no está implementada.
 *  Si es un usuario nuevo, lo registra localmente.
 *  @param {Like<User>} userLike
 */
export const saveUser = async( userLike ) => {

    const user = new User( userLike );
    //Todo: aqui falta un mapper

    if ( user.id ) {
        throw 'No implementada la actualizacion';
        return;
    }

    const updateUser = await createUser( user)
    return updateUser;
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