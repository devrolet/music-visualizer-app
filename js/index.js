// WEB AUDIO API: AUDIO DATA ANALYSIS 

const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256; // Control frequency resolution
const dataArray = new Uint8Array(analyser.frequencyBinCount);