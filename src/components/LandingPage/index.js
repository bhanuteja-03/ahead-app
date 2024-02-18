import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Apple from "../../assets/apple.svg";
import "./index.css"

const array=[0,1,2,3,4]

export const LandingPage=()=>{
    const container=useRef()

    useGSAP(()=>{
        gsap.from(".heading", 
            {
                scrollTrigger:{
                    trigger:".heading",
                    toggleActions: "restart none none restart",
                },
                x:-200, 
                opacity:0,
                duration:1,
                scaleX:0,
                scaleY:0,
                ease: "power4.inOut",
        },{ scope: container });

        gsap.from('.img', {
            x:0, 
            opacity:1,
            duration:1,
            scaleX:0,
            scaleY:0,
            delay:2,
            ease: "power4.inOut",
        },{ scope: container });

        gsap.from('.stars-cont', {
            x:-100, 
            opacity:1,
            duration:1,
            scaleX:0,
            scaleY:0,
            delay:2,
            ease: "power4.inOut",
        },{ scope: container });

        gsap.from('.circular-path', {
            rotation:270,
            duration:.5,
        },{ scope: container });

        gsap.from('.semi-circle-1', {
            opacity:0,
            scaleX:0,
            scaleY:2,
            x:-5, 
            duration:1,
            ease: "bounce.out",
        },{ scope: container });

        gsap.from('.semi-circle-2', {
            opacity:0,
            scaleX:2,
            scaleY:0,
            y:-5, 
            duration:1,
            ease: "bounce.out",
        },{ scope: container });

        gsap.from('.landing-page-halfOval', {
            rotation:100,
            duration:1,
        },{ scope: container });

        gsap.from('.outer-circle', {
            x:20,
            y:-20, 
            duration:1,
            ease: "power2.inOut",
        },{ scope: container });

        gsap.from('.landing-page-single-circle', {
            x:-20,
            y:20, 
            duration:1,
            ease: "power2.inOut",
        },{ scope: container });
    })

    return (
        <div className="landing-1" ref={container}>
            <div className="semi-circle-1"></div>
            <div className="semi-circle-2"></div>
            <div className="outer-circle">
                <div className="inner-circle"></div>
            </div>
            <div className="landing-page-halfOval"></div>
            <div className="landing-page-small-halfOval1"></div>
            <div className="landing-page-single-circle"></div>
            <div className="landing-page-single-circle1"></div>
            <div className="heading-card">
                <div className="heading">
                    <p>Ahead App</p>
                    <h1 className="main-title">Master Your life by mastering emotions</h1>
                </div>
                <div className="app-store-cont">
                    <div className="app-store-card">
                        <img src={Apple} alt="apple icon" width={"30px"} height={"30px"} />
                        <div>
                            <p className="download-app-text">Download on the app</p>
                            <h3 className="download-app">App Store</h3>
                        </div>
                    </div>
                    <div className="app-store-card-2">
                        <div className="stars-cont">
                            {array.map(element => 
                                <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="start" width={"17px"}/>)}
                        </div>
                        <p className="remove-margin">100+ AppStore reviews</p>
                    </div>
                </div>
            </div>
            <div class="circular-path">
                <div className="bgPic img"></div>
                <img className="img" src="https://res.cloudinary.com/dpdfymgri/image/upload/v1708283097/Screenshot_2024-02-19_003412_pc0uun.png" alt="Trulli" height={"400px"}/>
                <div className="big-ghost big-pink tilt-1 i-1"></div>
                <div className="ghost1 orange tilt-5 i-2"></div>
                <div className="ghost1 pink tilt-2 i-3"></div>
                <div className="ghost1 blue tilt-3 i-4"></div>
                <div className="big-ghost big-blue tilt-4 i-5"></div>
            </div>
        </div>
    )
}