function addStash(event) {
    let positionX = event.pageX
    let positionY = event.pageY
    console.log(positionX, positionY)
    let stash = document.getElementById("stash-pic")
    stash.style.top = `${positionY - 10}px`
    stash.style.left = `${positionX - 90}px`
  }
  
  let cat = document.getElementById("cat-pic")

  cat.addEventListener("click", addStash)