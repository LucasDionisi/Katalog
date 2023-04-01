class Music {
  /**
   * pElementId: HTML ID
   * pAudioUrl: URL de la musique
   * pType: Sub, Follow, ...
   * pTitle: Tire de la muisque
  */
  constructor(pElementId, pAudioUrl, pType, pTitle) {
    this.elementId = pElementId;
    this.audioUrl = pAudioUrl;
    this.type = pType;
    this.title = pTitle;

    this.colors = this.getColors();

    this.createHtml();

    this.wavesurfer = WaveSurfer.create({
      barWidth: 5.5,
      barRadius: 5,
      container: `#${this.elementId}`,
      height: window.screen.width <= 768 ? 64 : 128,
      normalize: true,
      progressColor: this.colors.progressColor,
      responsive: true,
      waveColor: this.colors.waveColor
    });

    this.wavesurfer.load(pAudioUrl);

    $(`.${this.elementId} #play-btn`).on('click', () => this.onBtnPlay());
    $(`.${this.elementId} #pause-btn`).on('click', () => this.onBtnPause());
    $(`.${this.elementId} #download-btn`).on('click', () => this.onBtnDownload());
  }

  getColors() {
    var colors = {};

    switch (this.type) {
      case Type.Follow:
        colors.progressColor = '#500080';
        break;
      case Type.Subscriber:
        colors.progressColor = '#d49f00';
        break;
      case Type.Donation:
        colors.progressColor = '#2f5b39';
        break;
      case Type.Bit:
        colors.progressColor = '#00c7a9';
        break;
      case Type.Raid:
        colors.progressColor = '#800000';
        break;
      case Type.Ban:
        colors.progressColor = '#0000ad';
        break;
      case Type.Theme:
        colors.progressColor = '#F7578A';
        break;

      default:
        colors.progressColor = '#252326';
        break;
    }

    
    colors.waveColor = '#444145';

    return colors;
  }

  createHtml() {
    const songCollection = document.querySelector('.song-collection');

    const song = document.createElement('div');
    song.classList.add('song', this.elementId);
    song.classList.add('song', this.type);
    song.classList.add('song', Type.All);
    song.classList.add('song', 'display');

    const info = document.createElement('div');
    info.classList.add('info');

    const subIcon = document.createElement('img');
    subIcon.src = `resources/icons/${this.type}.svg`;
    subIcon.classList.add('icon', 'twitch');
    subIcon.alt = 'icon sub';
    info.appendChild(subIcon);

    const playIcon = document.createElement('img');
    playIcon.src = 'resources/icons/play.svg';
    playIcon.classList.add('icon', 'play');
    playIcon.id = `play-btn`;
    playIcon.alt = 'icon play';
    info.appendChild(playIcon);

    const pauseIcon = document.createElement('img');
    pauseIcon.src = 'resources/icons/pause.svg';
    pauseIcon.classList.add('icon', 'play');
    pauseIcon.id = `pause-btn`;
    pauseIcon.alt = 'icon pause';
    pauseIcon.style.display = 'none';
    info.appendChild(pauseIcon);

    const songName = document.createElement('p');
    songName.textContent = this.title;
    info.appendChild(songName);

    song.appendChild(info);

    const songMain = document.createElement('div');
    songMain.classList.add('songMain');

    const songWave = document.createElement('div');
    songWave.classList.add('song-wave');
    songWave.id = this.elementId;
    songMain.appendChild(songWave);

    const downloadDiv = document.createElement('div');
    downloadDiv.classList.add('download');

    const downloadIcon = document.createElement('img');
    downloadIcon.src = 'resources/icons/download.svg';
    downloadIcon.classList.add('icon', 'download');
    downloadIcon.id = `download-btn`;
    downloadIcon.alt = 'icon download';
    downloadDiv.appendChild(downloadIcon);

    const downloadText = document.createElement('p');
    downloadText.innerHTML = 'Télécharger';
    downloadDiv.appendChild(downloadText);

    songMain.appendChild(downloadDiv);
    song.appendChild(songMain);

    songCollection.appendChild(song);

  }

  onBtnPlay() {
    musics.forEach((music) => {
      music.onBtnPause();
  });
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
    link.download = '' + this.elementId + '.mp3';
    // On ajoute cet élément a au DOM et on déclenche son clic pour lancer le téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}