import React from 'react';
import styles from './ProfileEditSuccess.module.scss';
import success from '../../assets/successicon.png';

const ProfileEditSuccess = () => {
    return (
        <div>
            <div className={styles.successcon}>
                <img
                src= {success} 
                className={styles.successicon}
                alt="Success Icon"
                />
                <p>Profile information has been updated successfully</p>
            </div>  
        </div>
    );
};

export default ProfileEditSuccess;