import React, {useState, useRef, useEffect} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from './utils';
import './styles/app.scss';
import Library from "./components/Library";
import Nav from './components/nav';

function App() {

  const audioRef = useRef(null)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    });
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      const roundedCurrent = Math.round(current);
      const roundedDuration = Math.round(duration);
      const animation = Math.round((roundedCurrent / roundedDuration) * 100 )
      setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation})
     };

     useEffect(() => {
      if (isPlaying) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
              playPromise.then((audio) => {
                  audioRef.current.play();
              }).catch(error => {
                  console.error("Playback failed:", error);
              });
          }
      }
  }, [currentSong, isPlaying, audioRef]);

  const skipTrackHandler = (direction) => {
    let currentIndex =songs.findIndex((song) => song.id === currentSong.id);
    if(direction === 'skip-forward') {
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }else if (direction === 'skip-back') {
        if((currentIndex -1) % songs.length === -1) {
            setCurrentSong(songs[songs.length -1]);
            return;
        }
        setCurrentSong(songs[(currentIndex - 1) % songs.length] )
    }
};

  const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
}


  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav 
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong} 
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        skipTrackHandler={skipTrackHandler}
      />
      <Library
      audioRef={audioRef} 
      songs={songs} 
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      setSongs={setSongs}
      libraryStatus={libraryStatus}
      />
      <audio 
          onTimeUpdate={timeUpdateHandler} 
          ref={audioRef} src={currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songEndHandler}
          >
      </audio> 
    </div>
  );
}

export default App;
