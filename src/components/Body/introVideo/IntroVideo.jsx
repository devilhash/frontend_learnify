import './introVideo.css';

const IntroVideo = ()=>{
    return(
 
        <div className="intovideo">
            <iframe  border-radius="10px" width="100%" height="100%" src=  "https://www.youtube.com/embed/25ag5ZZUQds?si=sMweXI2A5-0prJ2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default IntroVideo;