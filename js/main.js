 
    // updated to include dropdown and async/await
    (async () => {
			const selectEl = document.querySelector("#art-pieces");
			const outputImageEl = document.querySelector('#artImage');
			const outputFakeEl = document.querySelector('#fakeCheck');

			const fetchIndexResult = await fetch("https://acnhapi.com/v1/art");
			const fetchIndexJson = await fetchIndexResult.json();

			for (const [id, value] of Object.entries(fetchIndexJson)) {
				const name = value.name["name-USen"];

				const option = document.createElement("option");
				option.value = id;
				option.innerText = name;

				selectEl.appendChild(option);
			}

			selectEl.addEventListener("change", async () => {
				const id = selectEl.value;

				const fetchDetailResult = await fetch(`https://acnhapi.com/v1/art/${id}`);
				const fetchDetailJson = await fetchDetailResult.json();

				const imageUrl = fetchDetailJson.image_uri;
				const hasFake = fetchDetailJson.hasFake;
				
				outputImageEl.src = imageUrl;
				outputFakeEl.innerText = hasFake ? "There is a fake" : "There is not a fake";
			})
		})()



// original code 

//document.querySelector('#artSubmitButton').addEventListener('click', getArt);

// function getArt (){
//    let artInput = document.querySelector('#artNameInput').value;
//    let artParameter = artInput.replaceAll(" ", "_")

//     return fetch(`https://acnhapi.com/v1/art/${artParameter}`)
//     .then(res => {
//       if (res.status !== 200) {
//         alert("bad");
//         return;
//       }
      
//       return res.json()
//       .then(data => {
//         document.querySelector('#artNameOutput').innerText = data["name"]["name-USen"];
//         document.querySelector('#artImage').src = data.image_uri;
  
//         if (data["hasFake"] === true) {
//           document.querySelector('#fakeCheck').innerText = "There is a fake";
//         } else {
//           document.querySelector('#fakeCheck').innerText = "There is not a fake";
//         }
//       })
//     }) 
//     .catch(err => {
//         console.log(`error ${err}`);
//     });
// }

// will console log all of API at start

// fetch("https://acnhapi.com/v1/art").then(r=>r.json()).then(console.log)