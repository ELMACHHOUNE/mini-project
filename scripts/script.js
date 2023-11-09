const Personas = [
    {
      id: 1,
      title: "BARAKA",
      category: "outworld",
      attaque: "hand blades",
      img: "./images/baraka.jpg",
      desc: `Baraka is a Mortal Kombat 
      character who comes from a race in the Outlands. 
      He's a fierce warrior who has risen through his group's 
      ranks to become one of the most powerful fighters.`,
    },
    {
      id: 2,
      title: "D'VORAH",
      category: "outworld",
      attaque: 'body weapons',
      img: "./images/dvorah.jpg",
      desc: `
      This is one of the Mortal
       Kombat characters that has risen up
        from the Outworld. He's even been the main antagonist in some iterations of
         Mortal Kombat
      `,
    },
    {
      id: 3,
      title: "FROST",
      category: "cyborg",
      attaque: "ice frost",
      img: "./images/frost.jpg",
      desc: `
      Frost is one of the more interestingly designed Mortal Kombat female characters.
       She's a cyborg who made a comeback in this newest version of the game
      `,
    },
    {
      id: 4,
      title: "GERAS",
      category: "cyborg",
      attaque: "time and sand",
      img: "./images/geras.jpg",
      desc: `
      Geras is a creative that was made artificially. Created entirely to serve as an enforcer. He's 
      named after the Deity of old age with powers based around controlling time and sand
      `,
    },
    {
      id: 5,
      title: "FUJIN",
      category: "god",
      attaque: "wind",
      img: "./images/fujin.jpg",
      desc: `
      Fujin is definitely one of the most high-powered sounding Mortal 
      Kombat game characters, 
      as the God of Wind and one of the Protectors of Earthrealm
      `,
    },
    {
      id: 6,
      title: "RAIDEN",
      category: "god",
      attaque: "Light of the sun",
      img: "./images/raiden.jpg",
      desc: `
      Raiden could be called the central character of Mortal Kombat, he's 
      appeared in every single instalment and has always had a central role. He's the God of Thunder,
       a protector of the Earthrealm, and he's 
      often the central character in story modes in the series
      `,
    },
    {
      id: 7,
      title: "NIGHT WOLF",
      category: "humain",
      attaque: "Mystical weapons",
      img: "./images/night.jpg",
      desc: `
      Night Wolf has become one of the most recognisable Native
       American video game characters! 
      He makes use of mystical weapons like a bow he creates and a Tomahawk
      `,
    },
    {
      id: 8,
      title: "LIU KANG",
      category: "humain",
      attaque: "Kung fu",
      img: "./images/luikang.jpg",
      desc: `
      Liu Kang has appeared in just about every Mortal Kombat game. He's 
      one of the main characters as Earthrealm's greatest hero, Liu Kang is one of the most iconic Mortal Kombat characters
      `,
    },
    {
      id: 9,
      title: "ROBOCOP",
      category: "cyborg",
      attaque: "weapons, armor, guns",
      img: "./images/robocop.jpg",
      desc: `
      Another easy one! This one of the Mortal Kombat game characters is just the robotic cop best known from fun 80s films.`,
    },
    {
        id: 10,
        title: "GoMyCode",
        category: "not humain",
        attaque: "talking",
        img: "./images/gomycode.png",
        desc: `
        Another easy one! This one of the Mortal Kombat game characters is just the robotic cop best known from fun 80s films.`,
      },
  ];
  function createCharacterCard(character) {
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');

    const characterImg = document.createElement('img');
    characterImg.src = character.img;
    characterImg.alt = character.title;
    characterImg.classList.add('character-img');

    const characterTitle = document.createElement('h2');
    characterTitle.textContent = character.title;
    characterTitle.classList.add('character-title');

    const characterCategory = document.createElement('p');
    characterCategory.textContent = `Category: ${character.category}`;
    characterCategory.classList.add('character-category');

    const characterDescription = document.createElement('p');
    characterDescription.textContent = character.desc;
    characterDescription.classList.add('character-description');

    characterCard.appendChild(characterImg);
    characterCard.appendChild(characterTitle);
    characterCard.appendChild(characterCategory);
    characterCard.appendChild(characterDescription);

    return characterCard;
}

// Function to display characters based on category
function displayCharacters(category) {
    const charactersSection = document.querySelector('.characters');
    charactersSection.innerHTML = '';

    if (category === 'all') {
        Personas.forEach((character) => {
            const characterCard = createCharacterCard(character);
            charactersSection.appendChild(characterCard);
        });
    } else {
        const filteredCharacters = Personas.filter((character) => character.category === category);
        filteredCharacters.forEach((character) => {
            const characterCard = createCharacterCard(character);
            charactersSection.appendChild(characterCard);
        });
    }
}

// Add click event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter button');
filterButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('data-category');
        displayCharacters(category);
    });
});

// Initial display of all characters
displayCharacters('all');