import React from 'react'

export default props => {
    const title = props.title;
    if (title !== undefined) {
        return <div className="card card-default">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
            </div>

            <div className="card-body">
                {props.children}
            </div>
        </div>
    }
    else {
        return <div className="card card-default">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    }
}
