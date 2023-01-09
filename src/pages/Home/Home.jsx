import React from 'react';
import s from "./Home.module.scss"
import Title from "../../components/Title/Title";
import {Video} from "../../components/Video/Video";


const Home = () => {
    return (
        <div className={s.home}>
            <Title/>
            <Video/>
        </div>
    );
}

export default Home;