import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const dummyData=[
    {
        heading: "Power through, even when going the going gets tough",
        para: "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
    },
    {
        heading: "Power through, even when going the going gets tough",
        para: "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
    },
    {
        heading: "Power through, even when going the going gets tough",
        para: "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
    },
    {
        heading: "Power through, even when going the going gets tough",
        para: "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
    }
]



export const WorkWithUs=()=>{
    const container4=useRef()

    useGSAP(()=>{
        gsap.from(".work-heading-1", {
            scrollTrigger:{
                trigger:".work-heading-1",
                toggleActions: "restart none none restart",
            },
            x:-250,
            duration:2,
            opacity:0,
            scaleX:0,
            scaleY:0,
            ease: "power4.out",
        },{ scope: container4 });

        gsap.from(".work-heading-2", {
            scrollTrigger:{
                trigger:".work-heading-2",
                toggleActions: "restart none none restart",
            },
            x:150,
            duration:2,
            opacity:0,
            scaleX:0,
            scaleY:0,
            ease: "power4.out",
        },{ scope: container4 });
    })

    return(
        <div className="work-page" ref={container4}>
            <div className="work-header">
                <h1 className="work-heading work-heading-1">Work with us</h1>
                <h1 className="work-heading work-heading-2">ahead</h1>
            </div>
            <div className="work-body">
                <div className="work-card-1">
                    <div className="work-about">
                        <div className="work-big-ghost big-blue"></div>
                        <h2>About</h2>
                        <p className="work-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                    </div>
                    <div className="work-product">
                        <h2>Product</h2>
                        <p className="work-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                    </div>
                </div>
                <div className="work-card-2">
                    {dummyData.map((data) => (
                    <div className="work-right-card">
                        <p className="work-right-card-heading">{data.heading}</p>
                        <p className="work-right-card-para">{data.para}</p>
                    </div>)
                    )}
                </div>
            </div>
        </div>
    )
}