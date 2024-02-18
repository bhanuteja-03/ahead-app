import { MdEmojiEvents } from "react-icons/md";
import './index.css'

export const Header=()=>{
    return(
        <div className="header">
            <MdEmojiEvents />
            <ul className="nav">
                <li>Emotions</li>
                <li>Menifesto</li>
                <li>Self-awareness test</li>
                <li>Work with us</li>
            </ul>
            <button className="nav-btn">Download App</button>
        </div>
    )
}