import './video.css';
/* import video from '../media/video.hevc.mp4'; */

const Video = () => {
    return <div className='landingpage'>
        <video  autoPlay muted loop className='video-bg'>
        <source src="https://dl.dropboxusercontent.com/s/sn4fhjkod6io3ipjulw6f/video.mp4?rlkey=omnrxl6qnpl05jxtyw8fcc8e6&st=eple1kdn&dl=1" type="video/mp4"/>
        </video>
        <div className='bg-overlay'></div>
        <div className='navbar'>
            <div className='menu'>
                  <div></div>
                  <div></div>
                  <div></div>
            </div>
        </div>

        <div className='home-text'>
            <h1>Reliable company</h1>
            <p>Entrust your cargo to our company</p>
        </div>

        <div className='home-btn'>Explore</div>

    </div>
}

export default Video;