import profilePic from "./../images/profile_1.png";
import "./../CssFile/home.css"
function HImage() {
    return (
              
        <div className="home-img">
            <img src={profilePic} alt="Profile pics"/>
        </div>
    );
}
export default HImage;