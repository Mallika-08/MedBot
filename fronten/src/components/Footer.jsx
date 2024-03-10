import '../index.css';

function Footer(){
    return(
        <>
            <div className='footer-section'>
                <div className='sections'>
                    <div className='left-footer'>
                        <h4><span>Growth, patience and serve.</span></h4>
                        <h5>Benguluru, India.</h5>
                        <h5>Indira Naar</h5>
                    </div>
                    <div className='right-footer'>
                        <h5><span>Contact</span></h5>
                        <h5>+91 879459007</h5>
                        <h5>loremipsum@gmail.com</h5>
                    </div>
                    <div className='center-footer'>
                        <h5><span>Monitor your health.</span></h5>
                        <h5>User dashboard.</h5>
                        <h5>How to guide.</h5>
                    </div>
                    <div className='right-footer'>
                        <h5><span>Our services</span></h5>
                        <h5>Monitor and record your documents.</h5>
                        <h5>Provide and get help.</h5>
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