import React from 'react';

import PageLayout from '../../layouts/PageLayout';
import Forgot from '../../components/Forgot'

function index(props) {
    const appName = 'Forgot'

    return (
        <PageLayout
            appName={appName}
        >
            <Forgot 
                appName={appName}
            />
        </PageLayout>
    );
}

export default index;