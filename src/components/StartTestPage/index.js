import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { useGSAP } from "@gsap/react";
import "./index.css";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export const StartTestPage=()=>{
    const container3=useRef()

    useGSAP(()=>{
        gsap.from(".start-test-page-card2", {
            scrollTrigger:{
                trigger:".start-test-page-para-2",
                toggleActions: "restart none none restart",
            },
            y: 20,              
            delay:0.3,                                               
            duration:3,
            ease: "power4.out",
        },{ scope: container3 });

        gsap.from(".start-test-page-btn", {
            scrollTrigger:{
                trigger:".start-test-page-para-2",
                toggleActions: "restart none none restart",
            },
            scale: 0,                                               
            duration:1,
            ease: "power4.out",
        },{ scope: container3 });
    })

    return(
        <div className="start-test-page" ref={container3}>
            <div className="start-test-page-card">
                <p className=" start-test-page-para-1">We take privacy seriously</p>
                <h2 className=" start-test-page-heading">Before you get started</h2>
                <p className="start-test-page-para-2">"We won't share your answers with anyone(and won't ever tell you which friends said what about you)"</p>
                <p className="start-test-page-para-3">with love, <span className="start-test-page-deco-text">Team ahead</span></p>
            </div>
            <div className="start-test-page-card2">
                <button type="button" className="start-test-page-btn">Start a test</button>
                <p className="start-test-page-para-4">Take only 5 minutes</p>
            </div>
        </div>
    )
}