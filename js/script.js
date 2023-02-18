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

$('#play-btn').on('click', function() {
    wavesurfer.play();
    $('#play-btn').hide();
    $('#pause-btn').show();
  });

  $('#pause-btn').on('click', function() {
    wavesurfer.pause();
    $('#pause-btn').hide();
    $('#play-btn').show();
  });
