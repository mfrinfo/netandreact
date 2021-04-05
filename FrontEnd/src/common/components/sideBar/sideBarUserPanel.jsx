import React from 'react'

export default props => (
    <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
        <div className='image'>
            <img src={props.userImage} className='img-circle elevation-2' alt='ImageUser' />
        </div>
        <div className='info'>
            <a href="##" className="d-block">{props.userName}</a>
        </div>
    </div>
)
