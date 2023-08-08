/*
 * @Author: your name
 * @Date: 2022-04-01 17:35:20
 * @LastEditTime: 2022-04-04 13:39:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-mobile/src/pages/animation/AnimationPage.tsx
 */

import React, { useState, useRef } from 'react';
// import { Button } from 'antd';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

import styles from './animation.module.scss';
import AnimationDice from '../../assets/dice_6.json';

export default function AnimationPage() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <div>
      <Lottie
        loop={false}
        lottieRef={lottieRef}
        style={{
          width: 200,
          height: 200,
        }}
        autoplay={false}
        // width={200}
        // height={200}
        animationData={AnimationDice}
        onClick={() => {
          if (lottieRef.current) {
            lottieRef.current.play();
          }
        }}
        onComplete={() => {
          //
        }}
      />
      <div style={{ width: 100, height: 100, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            backgroundColor: 'rgba(0,0,0,.6)',
            top: 10,
            transform: buttonVisible ? 'translateX(100px)' : undefined,
            transition: 'transform 500ms',
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundColor: '#ccc',
          width: 200,
          height: 200,
          marginTop: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 100,
        }}
      >
        <div className={styles.inner_circle}></div>
        <div
          className={styles.inner_circle}
          style={{
            opacity: 0,
            animationDelay: '500ms',
          }}
        ></div>
        <div
          className={styles.inner_circle}
          style={{
            opacity: 0,
            animationDelay: '1s',
          }}
        ></div>
        <div
          className={styles.inner_circle}
          style={{
            opacity: 0,
            animationDelay: '1.5s',
          }}
        ></div>
      </div>
      <div className={styles.loading_row}>
        <div className={styles.test_img}></div>
        <div className={styles.dot_loading_container}>
          <div className={styles.dot}></div>
          {/* <div className={styles.dot}></div> */}
          {/* <div className={styles.dot}></div> */}
        </div>

        <div
          style={{
            width: 160,
            height: 160,
            marginLeft: 80,
            backgroundColor: '#ccc',
          }}
        >
          <div className={styles.rotate_loading}></div>
          <div
            style={{ animationDelay: '0.5s' }}
            className={styles.rotate_loading}
          ></div>
          <div
            style={{ animationDelay: '1s' }}
            className={styles.rotate_loading}
          ></div>
        </div>
        <div className={styles.vertical_loading_view}>
          <div className={styles.vertical_loading_bar}></div>
          <div className={styles.vertical_loading_bar}></div>
          <div className={styles.vertical_loading_bar}></div>
          <div className={styles.vertical_loading_bar}></div>
          <div className={styles.vertical_loading_bar}></div>
        </div>
      </div>
    </div>
  );
}
