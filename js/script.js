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

// On sélectionne l'élément avec l'id download-btn et on écoute l'événement click
$('#download-btn').on('click', function() {
  // Lorsque le bouton est cliqué, on crée un élément a avec un lien vers le fichier audio.mp3
  var link = document.createElement('a');
  link.href = '../resources/songs/audio.mp3';
  link.download = 'audio.mp3';
  // On ajoute cet élément a au DOM et on déclenche son clic pour lancer le téléchargement
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  });

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
