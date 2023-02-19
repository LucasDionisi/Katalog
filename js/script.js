const musicsList = [
    {
        elementId: 'MoneyDzy',
        url: '../resources/songs/audio.mp3',
        type: Type.Subscriber,
        title: 'Money Dzydzy'
    }
];

musicsList.forEach((music) => {
    new Music(music.elementId, music.url, music.type, music.title);
});