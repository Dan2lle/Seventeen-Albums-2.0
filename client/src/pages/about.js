// import Navbar from "../components/navbar"

// export default function About() {
//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>
//             <h1>About</h1>
//             <h2>More info about this website and Seventeen</h2>
//         </div>
//     )

// } 

import React from "react";
 
const About = () => {
    return (
        <div style={{padding: '20px 20px 0 20px', textAlign: 'center', backgroundImage: 'linear-gradient(snow, #ecccd5, snow)'}}>
            <div>
                <h1>About</h1>
                <br></br>
                <h2>More info about this website and Seventeen</h2>
                <br></br>
                <p>This application supports the users to add Seventeen albums to the list that is displayed on the
                    main page. It allows to the users to sort the albums by the name, and also to delete either
                    individual album or the whole album list.</p>
                    <br></br>
                <p>Seventeen is a K-pop boy group which was formed in 2015 and consists of 13 members named:
                    S.Coups, Jeonghan, Joshua, Jun, Hoshi, Wonwoo, Woozi, DK, Mingyu, The8, Seungkwan, Vernon, and Dino.</p>
                    <br></br>
                <p>The official colors of Seventeen are {' '}<span style={{color: '#f7cac9'}}>Rose Quartz</span>{' '} and
                {' '}<span style={{color: '#B3CEE5'}}>Senerity</span>{' '}, which is also the reason why I mainly used these two colors
                    to build the website. 
                </p>
            </div>
        </div>
    );
};
 
export default About;
