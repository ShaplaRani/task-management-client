const Footer = () => {
    return (
        <div className="bg-black opacity-50 ">
            <footer className="container mx-auto ">
                <div className="footer-content">
                    <div className="flex justify-around ">
                    <div className="footer-logo">
                        <img></img>
                        <h1>TaskFlowHub</h1>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#get-started">Get Started</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h2>Follow Us</h2>
                        <ul>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 TaskFlowHub. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;