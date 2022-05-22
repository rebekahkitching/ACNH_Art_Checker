document.querySelector('#artSubmitButton').addEventListener('click', getArt);

function getArt (){
   let artInput = document.querySelector('#artNameInput').value;
   let artParameter = artInput.replaceAll(" ", "_")

    return fetch(`https://acnhapi.com/v1/art/${artParameter}`)
    .then(res => {
      if (res.status !== 200) {
        alert("bad");
        return;
      }
      
      return res.json()
      .then(data => {
        document.querySelector('#artNameOutput').innerText = data["name"]["name-USen"];
        document.querySelector('#artImage').src = data.image_uri;
  
        if (data["hasFake"] === true) {
          document.querySelector('#fakeCheck').innerText = "There is a fake";
        } else {
          document.querySelector('#fakeCheck').innerText = "There is not a fake";
        }
      })
    }) 
    .catch(err => {
        console.log(`error ${err}`);
    });
}

// will console log all of API at start

// fetch("https://acnhapi.com/v1/art").then(r=>r.json()).then(console.log)


// make art selector drop-down 