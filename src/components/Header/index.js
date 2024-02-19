import { MdEmojiEvents } from "react-icons/md";
import './index.css'

export const Header=()=>{
    return(
        <div className="header">
            <img src="https://res.cloudinary.com/dpdfymgri/image/upload/v1708365146/ahead-icon_kazf1q.png" alt="icon" width={"40px"}/>
            <ul className="nav">
                <li>Emotions</li>
                <li>Manifesto</li>
                <li>Self-awareness test</li>
                <li>Work with us</li>
            </ul>
            <button className="nav-btn">Download App</button>
        </div>
    )
}