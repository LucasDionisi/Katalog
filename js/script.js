var wavesurfer = WaveSurfer.create({
    barWidth: 2,
    container: '#waveform',
    progressColor: '#0a3e66',
    responsive: true,
    waveColor: '#0f6fb8'
});

wavesurfer.load('../resources/songs/audio.mp3');

wavesurfer.on('ready', function () {
    wavesurfer.play();
});