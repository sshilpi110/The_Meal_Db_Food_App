
async function getfood() {


    try {
        // var z = document.querySelector("#search").value;
        // console.log(z)
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

        let data = await res.json();

        return data;



    } catch (error) {

    }
}

dishdata()
async function dishdata() {

    let data = await getfood();

    getdata(data);
}

function getdata(data) {
    console.log(data.meals[0])
    var h1 = document.querySelector('h1')
    h1.innerHTML = `${data.meals[0].strMeal},${data.meals[0].strArea}`;

    var image = document.createElement('img')
    image.setAttribute("id", "poster")
    image.src = data.meals[0].strMealThumb;



    var Receipe = document.createElement('p')
    Receipe.setAttribute("id", "Receipe")
    Receipe.innerHTML = `Receipe::--${data.meals[0].strInstructions}`;


    document.querySelector("#detailsbox").append(image, Receipe)

    for (key in data.meals[0]) {


        if (key.includes("strIngredient")) {

            if (data.meals[0][key] != "") {

                var ing = document.createElement('p')
                ing.setAttribute("id", "ing")
                ing.innerHTML = data.meals[0][key].trim()

                document.querySelector("#diver").append(ing)

            }

        }
    }
    for (key in data.meals[0]) {
        if (key.includes("strMeasure")) {

            if (data.meals[0] != "") {

                var mea = document.createElement('p')
                mea.setAttribute("id", "mea")
                mea.innerHTML = data.meals[0][key].trim()

                document.querySelector("#diver1").append(mea)

            }

        }


    }

}
