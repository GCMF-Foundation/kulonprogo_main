import React from 'react';
import { withRouter } from 'react-router'

import img from '../../assets/img/404.png'

// CSS
import "./style.css";

const C = (props) => {


    return (

        <div className="error-notfound" style={{ textAlign: 'center', paddingTop: 50 }} >


            <img className="404-img" src={img} alt="404" />

            <h3>Halaman tidak dapat di temukan.</h3>

            <p>Alamat yang dituju tidak tersedia.<br /> Pastikan alamat pemanggilan sudah benar dan coba beberapa saat lagi.</p>

            <button style={{ padding: 8, marginTop: 10, borderRadius: 10 }} onClick={() => { props.history.replace('/') }} >Home</button>
        </div>
    )
};

export default withRouter(C);

