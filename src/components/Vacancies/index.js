import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Apple from "../../assets/apple.svg";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const vacancyDummyData=[
    {
        id:1,
        position: "Senior Full-Stack Engineer",
        type_of_position: "Full-time position",
        location: "India or Remote",
        salary: "65-85k, 0.5-1.50% equity share options"
    },
    {
        id:2,
        position: "Senior Designer",
        type_of_position: "Full-time position",
        location: "India or Remote",
        salary: "45-55k, 0.5-1.50% equity share options"
    },
    {
        id:3,
        position: "Superstar Intern",
        type_of_position: "Full-time position",
        location: "India or Remote",
        salary: "25-35k, 0.5-1.50% equity share options"
    }
]

export const Vacancies = () => {
    const container5 = useRef();
    const [expandedCard, setExpandedCard] = useState(null);
  
    useGSAP(() => {
      gsap.from(".vacancy-heading", {
        scrollTrigger: {
          trigger: ".vacancy-page",
          toggleActions: "restart none none restart",
        },
        x: -800,
        duration: 2,
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        ease: "power4.out",
      }, { scope: container5 });
    });
  
    const handleMouseEnter = (id) => {
      if (expandedCard !== id) {
        gsap.to(`#card-${id}`, { height: 230, onComplete: () => setExpandedCard(id) });
      }
    };
  
    const handleMouseLeave = (id) => {
      if (expandedCard === id) {
        gsap.to(`#card-${id}`, { height: 200, onComplete: () => setExpandedCard(null) });
      }
    };
  
    return (
      <div className="vacancy-page" ref={container5}>
        <h1 className="vacancy-heading">Open vacancies</h1>
        <div className="vacancy-body">
          {vacancyDummyData.map((data) => (
            <div
              key={data.id}
              id={`card-${data.id}`}
              onMouseEnter={() => handleMouseEnter(data.id)}
              onMouseLeave={() => handleMouseLeave(data.id)}
              className={`vacancy-card ${expandedCard === data.id ? 'expanded' : ''}`}
            >
              <h3 className="vacancy-card-heading">{data.position}</h3>
              <ul className="vacancy-ul">
                <li className="vacancy-li">{data.type_of_position}</li>
                <li className="vacancy-li">{data.location}</li>
                <li className="vacancy-li">{data.salary}</li>
              </ul>
              {expandedCard === data.id && (
                <div className="buttonContainer">
                  <button id={`button-${data.id}`} className="vacancy-btn">See details</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr/>
        <div className="footer">
            <img src="https://res.cloudinary.com/dpdfymgri/image/upload/v1708365146/ahead-icon_kazf1q.png" alt="icon"/>
            <p className="footer-ahead">ahead</p>
            <div className="address">
                <div className="address-card-1">
                    <FaLocationDot/>
                    <p>Hyderabad, 500007, India</p>
                </div>
                <div className="address-card-2">
                    <IoIosMail/>
                    <p>hi@ahead-app.com</p>
                </div>
            </div>
            <div className="app-store-card">
                <img src={Apple} alt="apple icon" width={"30px"} height={"30px"} />
                <div>
                    <p className="download-app-text">Download on the app</p>
                    <h3 className="download-app">App Store</h3>
                </div>
            </div>
            <p>2022 Ahead app. All right reserved</p>
        </div>
      </div>
    );
  };