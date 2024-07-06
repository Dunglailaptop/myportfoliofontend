import React from "react";
import styles from "./Banner.module.css";
// import { getImageUrl } from "../Utils/Utils";

function Banner() {
  return (
    <>
    <div className={styles.Banner}>
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, <br></br> I'm NguyenXuanTienDung</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experi 
          C#. Reach out if you'd like learn more!
        </p>
        <a href="#" className={styles.contactBtn}>Show CV</a>
        </div>
         <img src="http://localhost:3000/images/1719928506116.jpg" alt="Hero image"
         className={styles.heroImg}
         ></img>
         <div className={styles.topBlur}></div>
         <div className={styles.bottomBlur}></div>
      </section>
    </div>
   
    </>
  );
}


export default Banner;