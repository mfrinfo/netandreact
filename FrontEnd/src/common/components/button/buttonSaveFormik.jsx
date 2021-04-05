import React from 'react'

export default props => (
    <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={props.disabled}
    ><i className="fas fa-save"></i> Salvar
    </button>
)

