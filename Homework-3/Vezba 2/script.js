let progLanguages = [
  {
    name: 'JavaScript',
    founder: {
      name: 'Brendan Eich',
      email: 'brendan_eich@gmail.com'
    },
    founded: 1995
  },

  {
    name: 'PHP',
    founder: {
      name: 'Rasmus Lerdorf',
      email: 'rasmus_lerdorf@gmail.com'
    },
    founded: 1994
  },

  {
    name: 'C#',
    founder: {
      name: 'Anders Hejlsberg',
      email: 'anders_hejlsberg@gmail.com'
    },
    founded: 2000
  }
];

console.log(progLanguages);

console.log(progLanguages[0]);

console.log(progLanguages[1].founder.email);

progLanguages.unshift({
  name: 'Ruby',
  founder: {
    name: 'Yukihiro Matsumoto',
    email: 'yukihiro_matsumoto@gmail.com'
  },
  founded: 1990
});

progLanguages.push({
  name: 'SQL',
  founders: [
    {
      name: 'Raymond Boyce',
      email: 'raymond_boyce@gmail.com'
    },
    {
      name: 'Donald Chamberlin',
      email: 'donald_chamberlin@gmail.com'
    }
  ],
  founded: 1970
});

console.log(progLanguages);