import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small grey darken-4">
                <div className="footer-copyright text-center py-3">© 2018 Copyright: <a href=""> <strong>TFC - The Future of Cars</strong></a>
                </div>
            </footer>

        )
    }
}

export default Footer;