import usersStore from "../../store/users-store";
import "./render-buttons.css";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = ( element ) => {
    
    const nexButton = document.createElement('button')
    nexButton.innerHTML = 'Next >';
    const prevButton = document.createElement('button')
    prevButton.innerHTML = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-pag';
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    element.append( prevButton, currentPageLabel, nexButton);
};