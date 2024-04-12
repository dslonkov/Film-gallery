import React from 'react';
import {Hero} from "../Hero";
import { Outlet } from 'react-router-dom'
import styles from './rootLayout.module.css'

export const RootLayout = () => {
  return (
    <div className='site-container'>
      <div className={styles.layout}>
        <Hero />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
