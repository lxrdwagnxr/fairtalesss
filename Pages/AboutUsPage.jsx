import { ReactComponent as AboutIconSvg } from '../Images/aboutusimg.svg';
import '../Styles/AboutUsPage.css'

const AboutIcon = () => {
    return (
        <AboutIconSvg
            className="about-icon"
            aria-label="О нас"
            role="img"
        />
    );
};

export default AboutIcon;