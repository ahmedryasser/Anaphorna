import { useContext, useEffect, useRef, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import {
    IconButton,Stack,
    Typography
} from "@mui/material";
import watchBackground from "./media/watchBackground.webp";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Speech() {
    const [recording, setRecording] = useState(false);
    const silenceTimer = useRef(null);
    const silenceTimeoutMs = 2000; 
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable,
        resetTranscript,
        startListening,
        stopListening,
    } = useSpeechRecognition();

    const startSpeechRecognition = () => {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
        setRecording(true);
        resetSilenceTimer();
    };

    const endSpeechRecognition = () => {
        SpeechRecognition.stopListening();
        setRecording(false);
        clearSilenceTimer();
        // handleMessageSend();
    };

    const resetSilenceTimer = () => {
        clearSilenceTimer();
        silenceTimer.current = setTimeout(() => {
            console.log("Silence detected, stopping recognition");
            endSpeechRecognition();
        }, silenceTimeoutMs);
    };

    const clearSilenceTimer = () => {
        if (silenceTimer.current) {
            clearTimeout(silenceTimer.current);
            silenceTimer.current = null;
        }
    };

    useEffect(() => {
        if (listening) {
            resetSilenceTimer();
        }
    }, [transcript, listening]);

    useEffect(() => {
        return () => clearSilenceTimer();
    }, []);
    const handleMessageSend = () => {
        // LLM calling the function to send the transcript
    };
    return (
        <>
      <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"} className="speech" sx={{backgroundImage: `url(${watchBackground})`, backgroundSize: "cover", height: "100%", width: "100%",backgroundPosition:"center"}} >
            <br/>
            {!recording && (
                <IconButton onClick={startSpeechRecognition}>
                    <PlayCircleIcon sx={{width:"250px", position:"relative", height:"250px", top: "-10px", color: "" }}/>
                </IconButton>
            )}
            {recording && (
                <IconButton onClick={endSpeechRecognition}>
                    <StopCircleIcon sx={{ width:"250px", position:"relative", height:"250px", top: "-10px" ,color: "red" }} />
                </IconButton>
            )}
            <br />
            <Typography variant='h4' bottom={"0"} position={"absolute"} marginBottom={"30px"} color={"#216454"}> {transcript}</Typography>
            
      </Stack>
        </>
      
    );
  }
  
  export default Speech;
  