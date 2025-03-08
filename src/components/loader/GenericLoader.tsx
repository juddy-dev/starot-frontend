import { useState, useEffect } from "react";
import styles from '@/styles/loader.module.css';

export default function GenericLoader() {


  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-[rgba(0,0,0,0.6)] z-[9999]">
     
        <div className={`${styles.eye}`}>
            <div className={`${styles.line_tl}`}></div>
            <div className={`${styles.line_tc}`}></div>
            <div className={`${styles.line_tr}`}></div>
            <div className={`${styles.pupil}`}></div>
            <div className={`${styles.iris}`}></div>
            <div className={`${styles.line_bl}`}></div>
            <div className={`${styles.line_bc}`}></div>
            <div className={`${styles.line_br}`}></div>
        </div>
    </div>
  );
}