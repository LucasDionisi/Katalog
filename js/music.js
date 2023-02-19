class Music {
  constructor(pElementId, pAudioUrl) {
    this.elementId = pElementId;
    this.audioUrl = pAudioUrl;

    this.wavesurfer = WaveSurfer.create({
      barWidth: 5.5,
      barRadius: 5,
      container: `#${this.elementId}`,
      normalize: true,
      progressColor: '#55595f',
      responsive: true,
      waveColor: '#000d23'
    });

    this.wavesurfer.load(pAudioUrl);


    $(`.${this.elementId} #play-btn`).on('click', () => this.onBtnPlay());
    $(`.${this.elementId} #pause-btn`).on('click', () => this.onBtnPause());
    $(`.${this.elementId} #download-btn`).on('click', () => this.onBtnDownload());
  }

  onBtnPlay() {
    this.wavesurfer.play();
    $(`.${this.elementId} #play-btn`).hide();
    $(`.${this.elementId} #pause-btn`).show();
  }

  onBtnPause() {
    this.wavesurfer.pause();
    $(`.${this.elementId} #play-btn`).show();
    $(`.${this.elementId} #pause-btn`).hide();
  }

  onBtnDownload() {
    // Lorsque le bouton est cliqué, on crée un élément a avec un lien vers le fichier audio.mp3
    var link = document.createElement('a');
    link.href = this.audioUrl;
    link.download = 'audio.mp3';
    // On ajoute cet élément a au DOM et on déclenche son clic pour lancer le téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

const music = new Music('waveform', '../resources/songs/audio.mp3');