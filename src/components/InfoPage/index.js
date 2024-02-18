import { LuBadgeDollarSign } from "react-icons/lu";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./index.css"

gsap.registerPlugin(MotionPathPlugin)

export const InfoPage=()=>{
    const container2=useRef()

    useGSAP(()=>{
        gsap.from(".info-page-circle", {
            scrollTrigger:{
                trigger:".info-page-para ",
                toggleActions: "restart none none restart",
            },
            motionPath: {
                path: [{x:0, y:0}, {x:200, y:100}, {x:400, y:100}, {x:600, y:100}, {x:800, y:100}, {x:1000, y:100}],
                curviness:0
              },
            duration:2,
            ease: "power2.out",
        },{ scope: container2 });

        gsap.from(".info-page-outer-circle", {
            scrollTrigger:{
                trigger:".info-page-para ",
                toggleActions: "restart none none restart",
            },
            x:50,
            y:50,
            duration:2,
            ease: "power3.out",
        },{ scope: container2 });

        gsap.from(".badge", {
            scrollTrigger:{
                trigger:".info-page-para ",
                toggleActions: "restart none none restart",
            },
            y:100,
            duration:2,
            ease: "power4.out",
        },{ scope: container2 });

        gsap.from(".info-page-icon", {
            scrollTrigger:{
                trigger:".info-page-para ",
                toggleActions: "restart none none restart",
            },
            duration:2,
            scaleX:0,
            scaleY:0,
            rotation: 120,
            ease: "power4.out",
        },{ scope: container2 });

        gsap.from(".info-page-small-circle", {
            scrollTrigger:{
                trigger:".info-page-para ",
                toggleActions: "restart none none restart",
            },
            x:30,
            y:80,
            duration:2,
            ease: "power4.out",
        },{ scope: container2 });

        gsap.from(".halfOval", {
            scrollTrigger:{
                trigger:".info-page-para ",
                toggleActions: "restart none none restart",
            },
            x:60,
            y:80,
            rotate: 270,
            duration:2,
            ease: "power4.out",
        },{ scope: container2 });

        gsap.from(".halfOval1", {
            scrollTrigger:{
                trigger:".info-page-para ",
                toggleActions: "restart none none restart",
            },
            rotate: 360,
            repeat:-1,
            duration: 2,
        },{ scope: container2 });
    })

    return (
        <div className="info-page" ref={container2}>
            <div className="halfOval1"></div>
            <div className="info-page-circle"></div>
            <div className="info-page-outer-circle">
                <div className="info-page-inner-circle1"></div>
            </div>
            <div className="halfOval"></div>
            <div className="info-page-small-circle"></div>
            <p className="info-page-para remove-margin">Built out of Frustration</p>
            <h1 className="remove-margin heading2">Meet the ahead App</h1>
            <div className="info-page-card">
                <div className="info-page-animation">
                    <div className="info-page-inner-circle">
                        <LuBadgeDollarSign className="badge"/>
                        <img className="info-page-icon" src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="star"/>
                    </div>
                </div>
                <div className="info-page-description">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
        </div>
    )
}