import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small blue">
                <div className="footer-copyright text-center py-3">© 2018 Copyright: <a href=""> AlgunSitioWeb.com</a>
                </div>
            </footer>

        )
    }
}

export default Footer;