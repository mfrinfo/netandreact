import React from 'react'

export default props => (
    <li className='breadcrumb-item'>
        <a href={props.path}>
            {props.label}
        </a>
    </li>
)
