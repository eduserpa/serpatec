import React from 'react';
import styles from './style/waves.widget.module.css'

export default function wavesWidget() {
    return(
        <section className={styles.section}>
            <div className={styles.wave1}></div>
            <div className={styles.wave2}></div>
            <div className={styles.wave3}></div>
            <div className={styles.wave4}></div>
        </section>

    )
}