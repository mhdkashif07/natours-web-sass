import React from 'react';
import { Grid } from '@material-ui/core';
import footer_logo from '../images/logo-green-2x.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__logo-box">
                    <img src={footer_logo} alt="full logo" className="footer__logo" />
                </div>
                <Grid container justifyContent="space-between" className="center" >
                    <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
                    <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a hre="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a hre="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a hre="#" className="footer__link">Carrers</a></li>
                        <li className="footer__item"><a hre="#" className="footer__link">Privacy policy</a></li>
                        <li className="footer__item"><a hre="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
                    </Grid>

                    <Grid item xs={12} sm={9} md={5} lg={4} xl={4}>
                    <div className="footer__copyright">
                        <p>Built by JONAS SCHMEDTMANN for his online course ADVANCED CSS AND SASS. Copyright © by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann!</p>
                </div>
                    </Grid>
                </Grid>
                </div> 
        </footer>
    )
}

export default Footer
