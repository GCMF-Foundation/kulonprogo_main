import React from 'react';

import PageLayout from '../../layouts/PageLayout';
import Register from '../../components/RegisterTeacher'

function index(props) {
    const appName = 'Register'

    return (
        <PageLayout
            appName={appName}
        >
            <Register />
        </PageLayout>
    );
}

export default index;