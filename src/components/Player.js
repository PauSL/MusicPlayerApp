import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ audioRef, 
    currentSong, 
    isPlaying, 
    setIsPlaying, 
    songInfo, 
    setSongInfo,
    songs,
    setCurrentSong,
    setSongs,
    skipTrackHandler,
     }) => {

        useEffect(() =>{

            const newSongs = songs.map((song) => {
                if (song.id === currentSong.id) {
                    return{
                        ...song,
                        active: true,
                    };
                }else{
                    return{
                        ...song,
                        active: false,
                    }
                }
            });
            setSongs(newSongs);

        },[currentSong])


    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }      
    };


    const getTime = (time) => {
        // This is a timer restar//
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60 )).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }


    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }


    return (
        <>
        <div className="player">
            <div className="time-controll">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track"> 
                    <input 
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range" 
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>  
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon
                onClick={() => skipTrackHandler('skip-back')} 
                className="skip-back" 
                size="2x" 
                icon={faAngleLeft} />
                <FontAwesomeIcon 
                onClick={playSongHandler} 
                className="play" 
                size="2x" 
                icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon 
                onClick={() => skipTrackHandler('skip-forward')} 
                className="skip-forward" 
                size="2x" 
                icon={faAngleRight} /> 
            </div>        
            </div>
        </>

    )
}

export default Player; 