function getCharacterInfo() {
    const characterInput = document.getElementById('characterName');
    const characterInfo = document.getElementById('characterInfo');
    const characterName = characterInput.value.toLocaleLowerCase();

    fetch(`http://localhost:5002/character/${characterName}`)
    .then(response => response.json())
    .then(data => {
        const {name, status, species, gender, origin:{name:originName}, image} = data;
        characterInfo.innerHTML = `
        <h2>${name}</h2>
        <img src="${image}" alt="${name}"/>
        <p>${status}</p>
        <p>${species}</p>
        <p>${gender}</p>
        <p>${originName}</p>
        `
    })
    .catch(error => characterInfo.innerHTML = `<p>Imposible acceder al personaje</p>`)
}