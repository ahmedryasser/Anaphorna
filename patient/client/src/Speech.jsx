import { useContext, useEffect, useRef, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import {
    IconButton,
} from "@mui/material";
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
      <div className="speech">
            {!recording && (
                <IconButton
                    onClick={startSpeechRecognition}
                >
                    <PlayCircleIcon/>
                </IconButton>
            )}
            {recording && (
                <IconButton onClick={endSpeechRecognition}>
                    <StopCircleIcon sx={{ color: "red" }} />
                </IconButton>
            )}
            {transcript}
      </div>
    );
  }
  
  export default Speech;
  