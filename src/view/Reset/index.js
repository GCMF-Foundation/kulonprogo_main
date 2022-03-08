import React from 'react';

import PageLayout from '../../layouts/PageLayout';
import Reset from '../../components/Reset'

function index(props) {
    const appName = 'Forgot'

    return (
        <PageLayout
            appName={appName}
        >
            <Reset
                appName={appName}
            />
        </PageLayout>
    );
}

export default index;