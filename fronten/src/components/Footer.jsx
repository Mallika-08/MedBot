import '../index.css';

function Footer(){
    return(
        <>
            <div className='footer-section'>
                <div className='sections'>
                    <div className='left-footer'>
                        <h4><span>Serve, Community, Grow.</span></h4>
                        <h4>Indra nagar</h4>
                        <h4>Bengaluru, India.</h4>
                    </div>
                    <div className='right-footer'>
                        <h4><span>Contact.</span></h4>
                        <h4>+91633889.</h4>
                        <h4>Lorem, ipsum.</h4>
                    </div>
                    <div className='center-footer'>
                        <h4><span>Services.</span></h4>
                        <h4>Lorem, ipsum.</h4>
                        <h4>Lorem, ipsum.</h4>
                    </div>
                    <div className='right-footer'>
                        <h4><span>Contribute.</span></h4>
                        <h4>Lorem, ipsum dolor.</h4>
                        <h4>Lorem, ipsum.</h4>
                    </div>
                </div>
                <div className='btm-btn'>
                    <li><a href="#"><button>Contact</button></a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Services</a></li>
                </div>
                <div className='copyright'>
                    <h4>MedBot.Ai-2024 &#169;</h4>
                </div>
            </div>
        </>
    );
}
export default Footer;