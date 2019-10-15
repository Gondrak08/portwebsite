import React from 'react'
import "./footer.css"

export default function footer() {
    return (
        <footer className="footer pt-5" id="footer">
            <div className="footer_logo-box">
            </div>
            <div className="row">
            <div className="col-1-of-2">
                <div className="footer_navigation">
                    <ul className="footer_list">
                        <li className="footer_item">
                            <a href="https://github.com/Gondrak08" className="footer_link">
                                    GitHub
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href="https://www.linkedin.com/in/vitor-alecrim-pereira-0a588b145/" className="footer_link">
                                    Linkedin
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href="#" className="footer_link">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer_copyright">
                        
                                Site By {''}
                        
                        <a href="#" className="footer_link"> Vitor Alecrim</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
