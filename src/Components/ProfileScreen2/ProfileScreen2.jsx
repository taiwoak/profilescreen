import React from 'react';
import styles from '../ProfileScreen/ProfileScreen.module.scss';
import mobile2 from '../../assets/mobile.png';
import windows from '../../assets/windows.png';

const ProfileScreen2 = () => {
    return (
        <div className={styles.container}>
         <div className={styles.innercon7}>
                <img
                src= {mobile2} 
                className={styles.imgmob}
                alt="Mobile Icon"
                />
                <div className={styles.innercon7a}>
                    <h1>IOS 15.3</h1>
                    <p>Safari Browser, Today 09:59, 129.205.124.143, Lagos Nigeria</p>
                </div>
                <div className={styles.innercon7b}>
                    <p>Sign out</p>
                </div>
          </div> 
          <div className={styles.innercon8}>
                <img
                src= {windows} 
                className={styles.imgwin2}
                alt="Windows Icon"
                />
                <div className={styles.innercon8a}>
                   <h1>Windows 10</h1>
                    <p>Chrome Browser, At present 129.205.124.143, Lagos Nigeria</p>
                </div>
                <div className={styles.innercon8b}>
                  <p>Sign out</p>
                </div>
            </div>
          <p className={styles.innercon8p}>Sign out on all devices</p>   
        </div>
    );
};

export default ProfileScreen2;