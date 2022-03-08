import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExclamationCircle } from 'react-bootstrap-icons';

// CSS
import "./style.css";

import eye_show from '../../assets/img/icon/eye_show.png';
import eye_hide from '../../assets/img/icon/eye_hide.png';

function Login(props) {
    const [keepLogin, setKeepLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [validationEmail, setValidationEmail] = useState();
    const [password, setPassword] = useState('');
    const [validationPassword, setValidationPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const handlerSetKeepLogin = () => setKeepLogin(!keepLogin);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const doValidation = () => {
        setValidationEmail(false)
        setValidationPassword(false)
        if (email === '' && password === '') {
            setValidationEmail(true)
            setValidationPassword(true)
            setEmail('');
            setPassword('');
        } else if (email === '') {
            setValidationEmail(true)
            setEmail('');
        } else if (password === '') {
            setValidationPassword(true)
            setPassword('');
        } else {
            doLogin()
        }

    }
    const doLogin = () => {
        let data = { email, password, keepLogin };
        setLoading(true);
        setValidationEmail(false)
        setValidationPassword(false)

        fetch("/_api/main/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),


        })
            .then(res => {

                return res.json();

            }
            ).then(
                (result) => {


                    if (result.success) {
                        window.location.href = result.redirect_uri;
                        return;
                    }

                    if (result.error) {
                        setError(result.error.code);

                    }

                    setLoading(false)

                }
            )
            .catch(error => {
                setError(true)
                setLoading(false)
            }
            )
    }

    return (
            
            <div className="main-container" data-page={props.appName} data-aos={"fade-up"}>
                <div className="form-title mb-3">
                    <div className="mb-0">
                        <h5>Masuk</h5>
                    </div>
                    <div>
                        <p>Silahkan masuk menggunakan akun kamu</p>
                    </div>
                </div>

                <div className="main-form">
                    <form>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Masukkan email / username" className={ error === 40001 ? "form-control px-3 is-invalid" : "form-control px-3" }  required />
                            {
                                validationEmail ?
                                    <div className="invalid-feedback d-block">
                                        <ExclamationCircle /> Email / username tidak boleh kosong
                                    </div>
                                    : null
                            }
                            {
                                error === 40001 ?
                                    <div className="invalid-feedback d-block">
                                        <ExclamationCircle size='14' /> Email tidak ditemukan
                                    </div>
                                    : null
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <div className="d-flex input-password">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} name="password" id="password" placeholder="Masukkan password" className={ error === 40002 ? "form-control px-3 is-invalid" : "form-control px-3"} required />
                                <div className="input-group-append form-control-feedback">
                                    <div className="input-group-text toggle-password">
                                    <img onClick={togglePasswordVisiblity} className="icon-btn" alt="eye" src={passwordShown ? eye_hide : eye_show} style={{ width: '25px', height: '25px' }} />
                                    </div>
                                </div>
                            </div>
                            {
                                validationPassword ?
                                    <div className="invalid-feedback d-block">
                                        <ExclamationCircle /> Password tidak boleh kosong
                                    </div>
                                    : null
                            }
                            {
                                error === 40002 ?
                                    <div className="invalid-feedback d-block">
                                        <ExclamationCircle size='14' /> Password tidak sesuai
                                    </div>
                                    : null
                            }
                        </div>

                        <div className="mb-4 d-flex">
                            <div className="col-6 form-check">
                                <input onChange={handlerSetKeepLogin} type="checkbox" name="keepLogin" id="keepLogin" className="form-check-input" />
                                <label htmlFor="keepLogin" className="foem-check-login">Ingat saya</label>
                            </div>
                            { error ?
                                <div className="col-6 forgot-password">
                                    <Link className="link" to="/forgot">Lupa password?</Link>
                                </div>
                                :
                                ''
                            }

                        </div>

                        <button type="submit" className="form-control mb-2" onClick={(e) => { e.preventDefault(); doValidation() }}>
                            {
                                loading ?
                                    <div className="loading-container">
                                        <span className="spinner-border text-light loading" role="status"></span> Tunggu sebentar
                                    </div>
                                    : "Masuk"
                            }
                        </button>

                        <div className="col-12 text-center">
                            <span data-testid="not-have-account">Belum punya akun?</span> <br />
                            <span data-testid="not-have-account">Silahkan hubungi sekolah</span>
                        </div>
                    </form>
                </div>

            </div>
    );
}

export default Login;