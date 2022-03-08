import React from 'react';
import { ExclamationCircle } from 'react-bootstrap-icons';

import './style.css';

function index(props) {
    return (
        <div className="d-flex justify-content-end position-fixed top-0 my-4 toast-container" style={{ zIndex: '11' }} data-aos={"fade-down"}>
            <div className="toast align-items-center text-white border-0 d-block" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="true" data-delay="2000">
                <div className="d-flex justify-content-center">
                    <div className="toast-body">
                        <ExclamationCircle size="18" />  &nbsp;&nbsp;Email atau password salah.&nbsp;&nbsp;
                    </div>
                    {/* <button onClick={toggleToastHide} type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button> */}
                </div>
            </div>
        </div>
    );
}

export default index;