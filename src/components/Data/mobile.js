import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

export default function Index() {

    const [summary, setSummary] = useState({})

    const getSummary = async () => {
        try {
            let response = await axios.get('_api/main/stats')
            setSummary(response.data.summary)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getSummary();
    }, [])

    return (
        <div className="data-mobile">
            <div className="data-box mb-5 mx-4">
                <div className="data-item mb-3">
                    <div className="col-12 px-3 mb-4">
                        <h4>Sekolah</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <fieldset className="col-5 mr-3 fieldset">
                            <legend className="legend float-none">Harian</legend>
                            {summary.schools_1d}
                        </fieldset>
                        <fieldset className="col-5 fieldset">
                            <legend className="legend float-none">Total</legend>
                            {summary.schools}
                        </fieldset>
                    </div>
                </div>
                <div className="data-item border-top mb-3">
                    <div className="col-12 px-3 mb-4">
                        <h4>Guru</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <fieldset className="col-5 mr-3 fieldset">
                            <legend className="legend float-none">Harian</legend>
                            {summary.teachers_1d}
                        </fieldset>
                        <fieldset className="col-5 fieldset">
                            <legend className="legend float-none">Total</legend>
                            {summary.teachers}
                        </fieldset>
                    </div>
                </div>
                <div className="data-item border-top">
                    <div className="col-12 px-3 mb-4">
                        <h4>Siswa</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <fieldset className="col-5 mr-3 fieldset">
                            <legend className="legend float-none">Harian</legend>
                            {summary.students_1d}
                        </fieldset>
                        <fieldset className="col-5 fieldset">
                            <legend className="legend float-none">Total</legend>
                            {summary.students}
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}
