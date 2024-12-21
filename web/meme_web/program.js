fetch("https://api.imgflip.com/get_memes")
    .then(response => {
        if(!response.ok){
            console.log("Connected to the api, but data wasn't found.")
        }
        return response.json()
    })
    .then(response => {
        let memes = response.data.memes
        let memeindex = Math.floor(Math.random() * memes.length)
        let memetoshow = memes[memeindex]
        memeelement = document.getElementById("meme")
        memeelement.src = memetoshow.url
    })
    .catch(error => console.log(error))
