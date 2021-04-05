import React from 'react'
import Menu from '../menu/menu'
import SideBarUserPanel from './sideBarUserPanel'
import Const from '../../../consts'


export default props => (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div>
            <a href={Const.FRONT_URL} className="brand-link">
                <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}></img>
                <span className="brand-text font-weight-light">{Const.TITULO_EMPRESA}</span>
            </a>
        </div>
        <div>
            <div className="sidebar">
                <SideBarUserPanel userName={props.userName} userImage={props.userImage} />
                <Menu />
            </div>
        </div>
    </aside>
)
