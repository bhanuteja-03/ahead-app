import { useRef,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { useGSAP } from "@gsap/react";
import AngryEmoji from "../../assets/emoji-angry-fill.svg";
import AstonishedEmoji from "../../assets/emoji-astonished-fill.svg";
import FrownEmoji from "../../assets/emoji-frown-fill.svg";
import SurpriseEmoji from "../../assets/emoji-surprise-fill.svg";
import "./index.css";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const dummyData=[
    {
        id:1,
        icon:AngryEmoji,
        situation: "You argue with a collegue",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        bg_color: "#b3e0f2",
        isTilted:false,
        width:"190px",
    },
    {
        id:2,
        icon:AstonishedEmoji,
        situation: "You argue with a collegue",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        bg_color: "#f5eff5",
        isTilted:false,
        width:"170px",
    },
    {
        id:3,
        icon:FrownEmoji,
        situation: "You argue with a collegue",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        bg_color: "#4c4cff",
        isTilted:true,
        width:"200px",
    },
    {
        id:4,
        icon:SurpriseEmoji,
        situation: "You argue with a collegue",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        bg_color: "#fad7c8",
        isTilted:false,
        width:"160px",
    },{
        id:1,
        icon:AngryEmoji,
        situation: "You argue with a collegue",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        bg_color: "#b3e0f2",
        isTilted:false,
        width:"190px",
    },
]

export const Page=()=>{
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const container1=useRef()
    console.log(hoveredIndex)

    useGSAP(()=>{
        gsap.from(".heading2", {
            scrollTrigger:{
                trigger:".heading2",
                toggleActions: "restart none none restart",
            },
            x:-1000,
            duration:2,
            opacity:0,
            scaleX:0,
            scaleY:0,
            ease: "power4.out",
        },{ scope: container1 });

        gsap.from(".card", {
            scrollTrigger:{
                trigger:".heading2",
                toggleActions: "restart none none none"
            },
            x:500,
            duration:2,
            ease: "power4.out",
        },{ scope: container1 });
    })

    return (
        <>
        <div className="page-2" ref={container1}>
            <div className="facts-card">
                <h1>EQ beats IQ</h1>
                <p className="facts">You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case)</p>
                <p className="facts">You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case)</p>
            </div>
            <h1 className="heading2">Does this sound familier...</h1>
            <ul className="page2-card-cont">
                {dummyData.map((data,index)=>(
                    <li key={data.id} className={`page2-card card ${data.isTilted ? 'tilted' : ''}`} style={{backgroundColor:data.bg_color, width:"300px", height:data.width}} >
                        <img src={data.icon} width={"40px"} height={"40px"}/>
                        <h4 className="remove-margin">{data.situation}</h4>
                        <p className="remove-margin">{data.description}</p>
                </li>
                ))}
                
            </ul>
        </div>
        </>
    )
}

//${data.isTilted ? 'tilted' : ''}