//Query web server 
//Grab link and return JSON content
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")

.then(response => response.json())
.then(paintings => {
    const paintingsElement = document.getElementById("paintings");
    //create a loop for each painting to add info
    //create table

    
    paintings.forEach(painting =>{
        const paintingElement = document.createElement("tr");
        paintingElement.innerHTML = `<td>${painting.name}</td>
            <td>${painting.year}</td>
            <td>${painting.artist}</td>`;
            paintingsElement.appendChild(paintingElement);
     
    });
})
.catch(err => {
    console.error(err.message);
});