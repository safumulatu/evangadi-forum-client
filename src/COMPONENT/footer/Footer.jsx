import footerheader from '../../assets/headerlogo.png';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './Footer.css';

function Footer() {
  return (
    <div className="footer bg text-white bgcolor">
      <div className="w-9/12 flex justify-between m-auto py-6">
        <div>
          <img src={footerheader} alt="evangadi logo" />
          <div className="social-icons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <nav>
          <h2>Useful Links</h2>
          <ul className="link-list">
            <li>
              <p className="text-xs font-light my-2">How it works</p>
            </li>
            <li>
              <p className="text-xs font-light my-2">Terms and Service</p>
            </li>
            <li>
              <p className="text-xs font-light my-2">Privacy and Policy</p>
            </li>
          </ul>
        </nav>
        <address>
          <h2>Contact Info</h2>
          <p className="text-xs font-light my-2">Evangadi Networks</p>
          <p className="text-xs font-light my-2">support@gmail.com</p>
          <p className="text-xs font-light my-2">+1-202-386-2702</p>
        </address>
      </div>
    </div>
  );
}

export default Footer;
