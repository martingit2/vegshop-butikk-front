import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Ensure you have this import somewhere in your project

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto py-10">
                <div className="flex justify-center space-x-8 mb-6">
                    <a href="/om-oss" className="text-sm font-semibold text-black hover:text-gray-700">Om oss</a>
                    <a href="/kontakt-oss" className="text-sm font-semibold text-black hover:text-gray-700">Kontakt oss</a>
                    <a href="/personvern" className="text-sm font-semibold text-black hover:text-gray-700">Personvern</a>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </div>
                <p className="text-center text-sm font-semibold text-black">
                    &copy; 2024 Vegshop
                </p>
            </div>
        </footer>
    );
}

export default Footer;
