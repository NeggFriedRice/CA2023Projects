const rickMortyAPI = "https://rickandmortyapi.com/api/character"

fetch(rickMortyAPI)
    .then(stream => {return stream.json()})
    .then(characters => {
        let charList = document.querySelector(".characters")
        let statusList = document.querySelector(".status")

        for (let i = 0; i < 20; i++) {
            charList.innerHTML += `<li>${characters.results[i].name}</li>`
            charList.innerHTML += `<img src="${characters.results[i].image}" style="max-width: 40px"></li>`
            statusList.innerHTML += `<li style="padding: 22px 0px">${characters.results[i].status}</li>`
        }
    })
    // .then(charStream => {return charStream})
    // .then(charStream => {
    //     let list = document.querySelector(".characters")
    //     console.log(list)
    //     console.log(charStream.results[0].name)
    //     list
    // })
    // .then(characters => {
    //     let list = document.querySelector(".characters")
    //     for (let i = 0; i < 20; i++) {
    //         list.innerHTML += `<li>${characters.results[i].name}</li>`
    //     }
    // })