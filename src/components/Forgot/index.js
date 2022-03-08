import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';

function Forgot(props) {
    const [email, setEmail] = useState('');
    const [validationEmail, setValidationEmail] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const doValidation = () => {
        setValidationEmail(false)
        if (email === '') {
            setValidationEmail(true)
            setEmail('');
        } else {
            doSend()
        }

    }
    const doSend = () => {
        let data = { email };
        setLoading(true);
        setValidationEmail(false)
        setError(false)

        fetch("/_api/main/forgot", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        })
            .then(res => {
                return res.json();
            }
            ).then(
                (result) => {
                    if (result.success) {
                        // window.location.href = result.redirect_uri;
                        setSuccess(true);
                        setError(false);
                        return;
                    }

                    if (result.error) {
                        setError(404);
                    }

                    setLoading(false)
                }
            )
            .catch(error => {
                setError(true)
                setLoading(false)
            })
    }
    
    return (
        <div className="main-container" data-page={props.appName} data-aos={"fade-up"}>
            {success ?
                <div>
                    <div className="form-title mb-4">
                        <div className="mb-3">
                            <h5>Lupa password</h5>
                        </div>
                        <div className="d-flex">
                            <div className="icon">
                                <Envelope size="30" color="#505254" />
                            </div>
                            <div className="desc px-2">
                                <p>Email berhasil dikirim! Silahkan periksa email untuk petunjuk penggantian password</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-form">
                        <div className="col-12 text-center back">
                            <Link className="link" to="/"> <ArrowLeftCircle />  Kembali</Link>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className="form-title mb-3">
                        <div className="mb-3">
                            <h5>Lupa password</h5>
                        </div>
                        <div>
                            <p>Silahkan masukkan email yang kamu gunakan untuk mendaftar. Kami akan mengirimkan email pentunjuk untuk mengganti password.</p>
                        </div>
                    </div>
                    <div className="main-form">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email">Email</label>
                                <input error={error} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Masukkan email" className="form-control px-3" autoFocus required />
                                {
                                    validationEmail ?
                                        <div className="invalid-feedback d-block">
                                            <ExclamationCircle /> Email wajib diisi
                                        </div>
                                        : null
                                }
                                {
                                    error === 404 ?
                                        <div className="invalid-feedback d-block">
                                            <ExclamationCircle /> Email tidak ditemukan
                                        </div>
                                        : ''
                                }
                            </div>
                            <button type="submit" className="form-control mb-4" onClick={(e) => { e.preventDefault(); doValidation() }}>
                                {
                                    loading ?
                                        <div className="loading-container">
                                            <span className="spinner-border text-light loading" role="status"></span> Tunggu sebentar
                                        </div>
                                        : "Kirim"
                                }
                            </button>
                            <div className="col-12 text-center back">
                                <Link className="link" to="/"> <ArrowLeftCircle />  Kembali</Link>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
}

export default Forgot;