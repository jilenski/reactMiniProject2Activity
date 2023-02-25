import './App.css';
import './assets/dist/css/bootstrap.min.css';

const Footer = () =>{

    const today = new Date();
    return(
        <footer className="mt-auto text-white-50">
            <p>
            Copyright &copy; {today.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer;