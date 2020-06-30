const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/3/32/Afineromance_by_JulesGrandgagnage.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/8/83/Bodhran-improvisation_hinnerk-ruemenapf.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/a/a5/03may2020-tobefree-generated.mp3`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/3/37/00_Jazz_Violin_Solo.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }
];
