const musicsList = [
    { elementId: 'Pas_très_gentil', url: '../resources/songs/Ban/Pas_très_gentil.mp3', type: Type.Ban, title: 'Pas_très_gentil'},
    { elementId: 'Tu_hors_de_ma_vue', url: '../resources/songs/Ban/Tu_hors_de_ma_vue.mp3', type: Type.Ban, title: 'Tu_hors_de_ma_vue'},
    { elementId: 'Bit_Me_Baby_One_More_Time_-_Twitch_Alert', url: '../resources/songs/Bit/Bit_Me_Baby_One_More_Time_-_Twitch_Alert.mp3', type: Type.Bit, title: 'Bit_Me_Baby_One_More_Time_-_Twitch_Alert'},
    { elementId: 'C_est_beau_les_bits', url: '../resources/songs/Bit/C_est_beau_les_bits.mp3', type: Type.Bit, title: 'C est_beau_les_bits'},
    { elementId: 'Merci_pour_les_bits', url: '../resources/songs/Bit/Merci_pour_les_bits.mp3', type: Type.Bit, title: 'Merci_pour_les_bits'},
    { elementId: 'Argent_argent_argent', url: '../resources/songs/Donation/Argent_argent_argent.mp3', type: Type.Donation, title: 'Argent_argent_argent'},
    { elementId: 'Je_vais_prendre', url: '../resources/songs/Donation/Je_vais_prendre.mp3', type: Type.Donation, title: 'Je_vais_prendre'},
    { elementId: 'Chaud_un_Follow', url: '../resources/songs/Follow/Chaud_un_Follow.mp3', type: Type.Follow, title: 'Chaud_un_Follow'},
    { elementId: 'Est-ce_que_tu_follow_Hé_ho', url: '../resources/songs/Follow/Est-ce_que_tu_follow_Hé_ho.mp3', type: Type.Follow, title: 'Est-ce_que_tu_follow_Hé_ho'},
    { elementId: 'Final_Follow', url: '../resources/songs/Follow/Final_Follow.mp3', type: Type.Follow, title: 'Final_Follow'},
    { elementId: 'Follow_Alert_1', url: '../resources/songs/Follow/Follow_Alert_1.mp3', type: Type.Follow, title: 'Follow_Alert_1'},
    { elementId: 'Follow_Alert_10', url: '../resources/songs/Follow/Follow_Alert_10.mp3', type: Type.Follow, title: 'Follow_Alert_10'},
    { elementId: 'Follow_Alert_2', url: '../resources/songs/Follow/Follow_Alert_2.mp3', type: Type.Follow, title: 'Follow_Alert_2'},
    { elementId: 'Follow_Alert_3', url: '../resources/songs/Follow/Follow_Alert_3.mp3', type: Type.Follow, title: 'Follow_Alert_3'},
    { elementId: 'Follow_Alert_4', url: '../resources/songs/Follow/Follow_Alert_4.mp3', type: Type.Follow, title: 'Follow_Alert_4'},
    { elementId: 'Follow_Alert_5', url: '../resources/songs/Follow/Follow_Alert_5.mp3', type: Type.Follow, title: 'Follow_Alert_5'},
    { elementId: 'Follow_Alert_6', url: '../resources/songs/Follow/Follow_Alert_6.mp3', type: Type.Follow, title: 'Follow_Alert_6'},
    { elementId: 'Follow_Alert_7', url: '../resources/songs/Follow/Follow_Alert_7.mp3', type: Type.Follow, title: 'Follow_Alert_7'},
    { elementId: 'Follow_Alert_8', url: '../resources/songs/Follow/Follow_Alert_8.mp3', type: Type.Follow, title: 'Follow_Alert_8'},
    { elementId: 'Follow_Alert_9', url: '../resources/songs/Follow/Follow_Alert_9.mp3', type: Type.Follow, title: 'Follow_Alert_9'},
    { elementId: 'Follow_organisé', url: '../resources/songs/Follow/Follow_organisé.mp3', type: Type.Follow, title: 'Follow_organisé'},
    { elementId: 'Mais_non_mais_non', url: '../resources/songs/Follow/Mais_non_mais_non.mp3', type: Type.Follow, title: 'Mais_non_mais_non'},
    { elementId: 'C_est_une_alerte_raid_-_Classic_Rock', url: '../resources/songs/Raid/C_est_une_alerte_raid_-_Classic_Rock.mp3', type: Type.Raid, title: 'C est_une_alerte_raid_-_Classic_Rock'},
    { elementId: 'Hit_the_Raid', url: '../resources/songs/Raid/Hit_the_Raid.mp3', type: Type.Raid, title: 'Hit_the_Raid'},
    { elementId: 'C_est_Jeff_qui_prend_tout_-_Funk', url: '../resources/songs/Subscriber/C_est_Jeff_qui_prend_tout_-_Funk.mp3', type: Type.Subscriber, title: 'C est_Jeff_qui_prend_tout_-_Funk'},
    { elementId: 'I_Believe_I_Can_Sub', url: '../resources/songs/Subscriber/I_Believe_I_Can_Sub.mp3', type: Type.Subscriber, title: 'I_Believe_I_Can_Sub'},
    { elementId: 'Je_kiffe_les__Subgift', url: '../resources/songs/Subscriber/Je_kiffe_les__Subgift.mp3', type: Type.Subscriber, title: 'Je_kiffe_les__Subgift'},
    { elementId: 'Je_suis_une_Alerte_Sub_-_Rock', url: '../resources/songs/Subscriber/Je_suis_une_Alerte_Sub_-_Rock.mp3', type: Type.Subscriber, title: 'Je_suis_une_Alerte_Sub_-_Rock'},
    { elementId: 'Merci_pour_la_moula_-_Funk', url: '../resources/songs/Subscriber/Merci_pour_la_moula_-_Funk.mp3', type: Type.Subscriber, title: 'Merci_pour_la_moula_-_Funk'},
    { elementId: 'Merci_pour_le_Sub_-_Funk', url: '../resources/songs/Subscriber/Merci_pour_le_Sub_-_Funk.mp3', type: Type.Subscriber, title: 'Merci_pour_le_Sub_-_Funk'},
    { elementId: 'Merci_pour_le_Sub_-_Rock', url: '../resources/songs/Subscriber/Merci_pour_le_Sub_-_Rock.mp3', type: Type.Subscriber, title: 'Merci_pour_le_Sub_-_Rock'},
    { elementId: 'Merci_pour_le_Subgift', url: '../resources/songs/Subscriber/Merci_pour_le_Subgift.mp3', type: Type.Subscriber, title: 'Merci_pour_le_Subgift'},
    { elementId: 'Never_gonna_gift_un_sub', url: '../resources/songs/Subscriber/Never_gonna_gift_un_sub.mp3', type: Type.Subscriber, title: 'Never_gonna_gift_un_sub'},
    { elementId: 'One_More_Sub', url: '../resources/songs/Subscriber/One_More_Sub.mp3', type: Type.Subscriber, title: 'One_More_Sub'},
    { elementId: 'Ballade_en_sifflotant', url: '../resources/songs/Theme/Ballade_en_sifflotant.mp3', type: Type.Theme, title: 'Ballade en sifflotant'},
    { elementId: 'Blues_Rock', url: '../resources/songs/Theme/Blues_Rock.mp3', type: Type.Theme, title: 'Blues Rock'},
    { elementId: 'Classic_Prog_Rock', url: '../resources/songs/Theme/Classic_Prog_Rock.mp3', type: Type.Theme, title: 'Classic Prog Rock'},
    { elementId: 'Electro_Rock', url: '../resources/songs/Theme/Electro_Rock.mp3', type: Type.Theme, title: 'Electro Rock'},
    { elementId: 'Folk', url: '../resources/songs/Theme/Folk.mp3', type: Type.Theme, title: 'Folk'},
    { elementId: 'Funk_Hop', url: '../resources/songs/Theme/Funk_Hop.mp3', type: Type.Theme, title: 'Funk Hop'},
    { elementId: 'Funk_Long', url: '../resources/songs/Theme/Funk_Long.mp3', type: Type.Theme, title: 'Funk Long'},
    { elementId: 'Funk_Rock', url: '../resources/songs/Theme/Funk_Rock.mp3', type: Type.Theme, title: 'Funk Rock'},
    { elementId: 'Funk_Short', url: '../resources/songs/Theme/Funk_Short.mp3', type: Type.Theme, title: 'Funk Short'},
    { elementId: 'Get_money_-_Hype_train', url: '../resources/songs/Theme/Get_money_-_Hype_train.mp3', type: Type.Theme, title: 'Get money - Hype train'},
    { elementId: 'Mellow_Trip_Hop', url: '../resources/songs/Theme/Mellow_Trip_Hop.mp3', type: Type.Theme, title: 'Mellow Trip Hop'},
    { elementId: 'Merci_pour_ce_live_Rock', url: '../resources/songs/Theme/Merci_pour_ce_live_Rock.mp3', type: Type.Theme, title: 'Merci pour ce live Rock'},
    { elementId: 'Punk_Dubstep', url: '../resources/songs/Theme/Punk_Dubstep.mp3', type: Type.Theme, title: 'Punk Dubstep'},
    { elementId: 'Riff_Classic_Rock', url: '../resources/songs/Theme/Riff_Classic_Rock.mp3', type: Type.Theme, title: 'Riff Classic Rock'},
    { elementId: 'Soul_Hop', url: '../resources/songs/Theme/Soul_Hop.mp3', type: Type.Theme, title: 'Soul Hop'},
    { elementId: 'SynthWave_Rock', url: '../resources/songs/Theme/SynthWave_Rock.mp3', type: Type.Theme, title: 'SynthWave Rock'},
    { elementId: 'Trip_Hop_Funk', url: '../resources/songs/Theme/Trip_Hop_Funk.mp3', type: Type.Theme, title: 'Trip Hop Funk'},
    { elementId: 'Trip_Hop', url: '../resources/songs/Theme/Trip_Hop.mp3', type: Type.Theme, title: 'Trip Hop'}
    ]   
    ;

// Fonction pour mélanger le tableau
function shuffle(array) {
    // Parcours du tableau depuis la fin jusqu'au début
    for (let i = array.length - 1; i > 0; i--) {
      // Génère un index aléatoire entre 0 et i
      const j = Math.floor(Math.random() * (i + 1));
      // Échange l'élément i avec l'élément j
      [array[i], array[j]] = [array[j], array[i]];
    }
    // Retourne le tableau mélangé
    return array;
}

shuffle(musicsList);

var musics = [];

musicsList.forEach((music) => {
    musics.push(new Music(music.elementId, music.url, music.type, music.title.replaceAll('_', ' ')));
});


// MENU
$('menu a').on('click', function () {
    musics.forEach((music) => {
        music.onBtnPause();
    });

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

$('footer .paypal').on('click', goToPaypal);
$('.pre-songs .paypal').on('click', goToPaypal);

function goToPaypal() {
    window.open('https://music.k1000prod.fr', '_blank');
}