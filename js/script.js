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