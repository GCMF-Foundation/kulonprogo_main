import React from 'react';

import PageLayout from '../../layouts/PageLayout';
import Login from '../../components/Login'

function index(props) {
    const appName = 'Login'

    return (
        <PageLayout
            appName={appName}
        >
            <Login/>
        </PageLayout>
    );
}

export default index;