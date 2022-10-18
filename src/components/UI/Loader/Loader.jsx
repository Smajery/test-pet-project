import React from 'react';
import classes from './Loader.module.css'

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.loader__container}>
                <div className={classes.roller}>
                </div>
            </div>
        </div>
    );
};

export default Loader;