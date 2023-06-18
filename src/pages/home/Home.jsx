import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import "./Home.scss";

function Home(props) {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">container</div>
        </div>
    );
}

export default Home;