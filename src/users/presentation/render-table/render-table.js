import usersStore from '../../store/users-store';
import { deleteUserById } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

let table;

/**
 *  Genera el elemento de tabla HTML estructurado con sus encabezados.
 * @returns {HTMLTableElement} El elemento de la tabla inicializado con su encabezado y cuerpo vacío.
 */
const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    //*Estoy creando una constante que tendra el contenido de
    //*mi tabla
    const tableBody = document.createElement('tbody');
    //*Estoy agregando con la funcion "append" los encabezados
    //*de la tabla y el cuerpo de la tabla
    table.append( tableHeaders, tableBody );
    //*Al final retorno mi tabla
    return table;
};

/**
 *  @param {MouseEvent} event 
 */
const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user');
    if ( !element ) return;

    const id = element.getAttribute('data-id');
    showModal( id );
};

/**
 *  @param {MouseEvent} event 
 */
const tableDeleteListener = async(event) => {
    const element = event.target.closest('.delete-user');
    if ( !element ) return;

    const id = element.getAttribute('data-id');
    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();
    } catch (error) {
        console.log(error);
        alert('No se pudo eliminar')
    }
};

/**
 *  Funcion para renderizar la tabla que contendra nuestros
 *  usuarios
 * @param {HTMLDivElement} element
 */
export const renderTable = ( element ) => {

    //*Ingresamos nuestros usuarios en una constante "users":
    const users = usersStore.getUsers();

    //*Si la variable tabla no esta inicializada, la
    //*inicializamos con la funcion "createTable" y agregamos la
    //*tabla en nuestro argumento element
    if ( !table ) {
        table = createTable();
        element.append( table );

        table.addEventListener('click', tableSelectListener)
        table.addEventListener('click', tableDeleteListener)
    }

    //*Se creo una variable "tableHTML" que se usara como cuerpo
    //*de nuestra table, para agregar los usuarios. 
    let tableHTML = '';
    users.forEach( user => {
        tableHTML += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#/" class="select-user" data-id="${ user.id }">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${ user.id }">Delete</a>
                </td>
            </tr>
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML;
};