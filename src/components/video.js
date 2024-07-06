import './video.css';
import video from '../media/video.mp4';

const Video = () => {
    return <div className='landingpage'>
        <video src={video} autoPlay muted loop className='video-bg'></video>
        <div className='bg-overlay'></div>
        <div className='navbar'>
            <div className='menu'>
                  <div></div>
                  <div></div>
                  <div></div>
            </div>
        </div>

        <div className='home-text'>
            <h1>The ideal Island</h1>
            <p>Come live out your ideal vacation with us</p>
        </div>

        <div className='home-btn'>Explore</div>
        
    </div>
}

export default Video;