import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import Loader from '../../ui/Loader/Loader';

const Dashboard = (props) => {
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                aside
                aside
                aside
                aside
            </aside>
            <main className={styles.main}>
                main
                <Loader></Loader>
            </main>
        </div>
    );
};

Dashboard.propTypes = {

};

export default Dashboard;