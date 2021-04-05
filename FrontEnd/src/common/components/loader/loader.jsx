import React from 'react'
import Loader from 'react-loader-spinner'

const style = { position: "fixed", top: "50%", left: "55%", transform: "translate(-50%, -50%)" };

export default props => {
    return (
        <div style={style}>
            <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={48}
                width={48}
                timeout={0}
            />
        </div>
    );
}
