const musicsList = [
    {
        elementId: 'MoneyDzy',
        url: '../resources/songs/audio.mp3',
        type: Type.Follow,
        title: 'Money Dzydzy'
    },
    {
        elementId: 'MoneyDzy2',
        url: '../resources/songs/audio.mp3',
        type: Type.Subscriber,
        title: 'Money Dzydzy'
    },
    {
        elementId: 'MoneyDzy3',
        url: '../resources/songs/audio.mp3',
        type: Type.Donation,
        title: 'Money Dzydzy'
    },
    {
        elementId: 'MoneyDzy4',
        url: '../resources/songs/audio.mp3',
        type: Type.Bit,
        title: 'Money Dzydzy'
    },
    {
        elementId: 'MoneyDzy5',
        url: '../resources/songs/audio.mp3',
        type: Type.Raid,
        title: 'Money Dzydzy'
    },
    {
        elementId: 'MoneyDzy6',
        url: '../resources/songs/audio.mp3',
        type: Type.Ban,
        title: 'Money Dzydzy'
    }
];

musicsList.forEach((music) => {
    new Music(music.elementId, music.url, music.type, music.title);
});

$('menu a').on('click', function () {
    const lType = this.dataset.type;
    try {
        $('menu a.selected')[0].classList.remove('selected');
    } catch (e) {
        console.warn(`Impossible to unselect an element: ${e}`);
    }
    
    this.classList.add('selected');

    const allSongs = $('.song.all');
    for (var i = 0; i < allSongs.length; i++) {
        allSongs[i].classList.remove('display');
    }

    const songsSelected = $(`.song.${lType}`);
    for (var i = 0; i < songsSelected.length; i++) {
        songsSelected[i].classList.add('display');
    }
});

$('footer .paypal').on('click', function() {
    window.open('https://music.k1000prod.fr', '_blank');
});