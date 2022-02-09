// write your code here




window.addEventListener("DOMContentLoaded", () => {
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
        const details = document.getElementById("ramen-detail");
        img.id = "test"
        img.src = param.image;
        imgContainer.appendChild(img);
    }

        //Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
        
        imgContainer.addEventListener("click", () => testFunction(param));
        function testFunction(e) {
            console.log(e.id)
            // fetch(`http://localhost:3000/ramens?id=${e.id}`
            //     .then(resp1 => resp1.json)
            //     .then(resp2 = () => {
            //         let name = document.querySelector(".name")
            //         name.innerHTML = console.log(e.target);

            //         let photo = document.querySelector(".detail-image");
            //         photo.src = "./assets/ramen/shoyu.jpg"

            //         document.querySelector(".restaurant").innerHTML = "dude"
            //     }))

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
        

    })
    
})
