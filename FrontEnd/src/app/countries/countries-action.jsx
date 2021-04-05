import axios from 'axios'
import consts from '../../consts'

export function _submit(values) {
    const url = `${consts.API_URL + 'v2/countries'}`
    return (
        axios.put(url, JSON.stringify(values), consts.HEADER_WITH_TOKEN_AXIOS)
            .then(resp => ({ type: 'PUT_COUNTRY', payload: resp }))
            .catch(e => ({ type: 'ERROR_COUNTRY', payload: e }))
    )
};

export function _onLoadList() {
    const url = `${consts.API_URL + 'v2/countries'}`
    return (
        axios.get(url, consts.HEADER_WITH_TOKEN_AXIOS)
            .then(resp => ({ type: 'LOAD_LIST_COUNTRY', payload: resp }))
            .catch(e => ({ type: 'ERROR_COUNTRY', payload: e }))
    )
};

export function _onLoad(id) {
    const url = `${consts.API_URL + 'v2/countries/' + id}`
    return (
        axios.get(url, consts.HEADER_WITH_TOKEN_AXIOS)
            .then(resp => ({ type: 'LOAD_COUNTRY', payload: resp }))
            .catch(e => ({ type: 'ERROR_COUNTRY', payload: e }))
    )
};
