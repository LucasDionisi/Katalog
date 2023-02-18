var wavesurfer = WaveSurfer.create({
    barWidth: 5.5,
    barRadius: 5,
    container: '#waveform',
    normalize: true,
    progressColor: '#55595f',
    responsive: true,
    waveColor: '#000d23'
});

wavesurfer.load('../resources/songs/audio.mp3');

wavesurfer.on('ready', function () {
    wavesurfer.play();
});