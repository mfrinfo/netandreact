import consts from './consts'

export const isAuthenticated = () => {
    try {
        const localTeste = JSON.parse(localStorage.getItem(consts.USERKEY))
        if (localTeste === null) {
            return false
        }

        const dataExpirar = new Date(localTeste.expiration)
        if (dataExpirar === null || localTeste.authenticated === null) {
            return false
        }

        const data = new Date();
        if ((localTeste.authenticated) && (data < dataExpirar)) {
            return true
        } else {
            localStorage.removeItem(consts.USERKEY)
            return false
        }
    } catch (e) {
        return false
    }
};
