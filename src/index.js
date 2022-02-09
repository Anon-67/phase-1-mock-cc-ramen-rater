// write your code here




window.addEventListener("DOMContentLoaded", () => {
    initialize();

})

function initialize() {
    fetch("http://localhost:3000/ramens")
        .then(resp => resp.json())
        .then(resp2 => {
            resp2.forEach(function(a){
                renderImg(a);
            })
        })

    
    let imgContainer = document.getElementById("ramen-menu")
    function renderImg(param){
        const img = document.createElement("img");
        img.src = param.image;
        imgContainer.appendChild(img);

        img.addEventListener("click", () => testFunction(param));
        function testFunction(e) {
            console.log(e)

            let name = document.querySelector(".name")
            name.innerHTML = e.name;

            let photo = document.querySelector(".detail-image");
            photo.src = e.image

            document.querySelector(".restaurant").innerHTML = e.restaurant
                

        }
    }
}


let form = document.getElementById("new-ramen");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("new-name").value
    let restaurant = document.getElementById("new-restaurant").value
    let image = document.getElementById("new-image").value
    let rating = document.getElementById("new-rating")
    let comment = document.getElementById("new-comment")

    let data = {
        "id": 6,
        "name": `${name}`,
        "restaurant": `${restaurant}`,
        "image": `${image}`,
        "rating": `${rating}`,
        "comment": `${comment}`
        }


    fetch("http://localhost:3000/ramens", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    initialize();
        

    })
    

