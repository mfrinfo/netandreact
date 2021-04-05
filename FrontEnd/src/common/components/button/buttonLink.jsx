import React from 'react'

export default props => (
    <a href={props.link} className={props.classe} role="button"><i className={props.icon}></i>{props.caption}</a>
)
