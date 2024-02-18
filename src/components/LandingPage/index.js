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
                <img className="img" src="https://picsum.photos/200/300.jpg" alt="Trulli"/>
                <img className="icon i-1" src="https://res.cloudinary.com/dpdfymgri/image/upload/v1708242333/rvzm9av4hw7aa48ykwpn.jpg" alt="" width={"50px"}/>
                <img className="icon i-2" src="https://res.cloudinary.com/dpdfymgri/image/upload/v1708242333/rvzm9av4hw7aa48ykwpn.jpg" alt="" width={"50px"}/>
                <img className="icon i-3" src="https://res.cloudinary.com/dpdfymgri/image/upload/v1708242333/rvzm9av4hw7aa48ykwpn.jpg" alt="" width={"50px"}/>
                <img className="icon i-4" src="https://res.cloudinary.com/dpdfymgri/image/upload/v1708242333/rvzm9av4hw7aa48ykwpn.jpg" alt="" width={"50px"}/>
                {/* <svg className="icon i-1" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg> */}
                {/* <svg className="icon i-2" viewBox="0 0 24 24">
                <path d="M20 6H4v2h16V6zM4 14h16v-2H4v2z"></path>
                </svg> 
                <svg className="icon i-3" viewBox="0 0 24 24">
                <path d="M10 20H8v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zM4 6h16V4H4v2z"></path>
                </svg>
                <svg className="icon i-4" viewBox="0 0 24 24">
                <path d="M12 14.42l3.89 2.34-1-4.28 3.34-2.89-4.42-.38L12 5 9.19 9.21l-4.42.38 3.34 2.89-1 4.28z"></path>
                </svg> */}
            </div>
        </div>
    )
}