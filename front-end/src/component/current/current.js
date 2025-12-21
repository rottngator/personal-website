import './current.css';

const Current = () => {
    return (
        <div className="current-box">
            <h2 className="current-title">CURRENTLY    </h2>
            <h3 className="current-music">listening to:</h3>
            <p className="current-content">

                <p>What if...? - HIMALAYAS + The Haunt</p>
                {/* <img src='./images/current/ocean_music_cover.gif' alt='music cover' /> */}
                <audio
                    controls
                    src='./music/What_If.mp3'
                    className='music-player'
                    >
                        your browsers doesn't support this audio element.
                </audio>

            <h3>reading:</h3>
                <p>
                    Goth - Otsuchi
                </p>
            </p>
        </div>
    );
};

export default Current;