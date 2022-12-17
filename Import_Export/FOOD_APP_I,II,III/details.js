

var data = JSON.parse(localStorage.getItem("dishdata")) || [];

console.log(data)

var h1 = document.querySelector('h1')
h1.innerHTML = `${data[0].strMeal},${data[0].strArea}`;

var image = document.createElement('img')
image.setAttribute("id", "poster")
image.src = data[0].strMealThumb;



var Receipe = document.createElement('p')
Receipe.setAttribute("id", "Receipe")
Receipe.innerHTML = `Receipe::--${data[0].strInstructions}`;


document.querySelector("#detailsbox").append(image, Receipe)

for (key in data[0]) {


    if (key.includes("strIngredient")) {

        if (data[0][key] != "") {

            var ing = document.createElement('p')
            ing.setAttribute("id", "ing")
            ing.innerHTML = data[0][key].trim()

            document.querySelector("#diver").append(ing)

        }

    }
}

for (key in data[0]) {
    if (key.includes("strMeasure")) {

        if (data[0][key] != "") {

            var mea = document.createElement('p')
            mea.setAttribute("id", "mea")
            mea.innerHTML = data[0][key].trim()

            document.querySelector("#diver1").append(mea)

        }

    }

}
