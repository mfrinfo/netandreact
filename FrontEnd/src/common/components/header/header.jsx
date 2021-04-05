import React from 'react'

export default props => {
    return (
        <React.Fragment>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href='##'><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href='logout' className="nav-link"><i className="fas fa-door-closed"></i> Sair</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
