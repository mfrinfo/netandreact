import React from 'react'

export default props => (
    <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0 text-dark">
                        <small>{props.title}</small>
                        <small className="text-muted"> {props.subTitle}</small>
                    </h1>
                </div>
                <div className="col-sm-6">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
)
