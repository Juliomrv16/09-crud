

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = () => {
    throw new Error("No implementado");
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

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}