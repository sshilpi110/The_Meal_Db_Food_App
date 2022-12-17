
async function getfood() {

    try {
        var z = document.querySelector("#search").value;
        console.log(z)
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${z}`);

        let data = await res.json();
        return data;

    } catch (error) {

    }
}

dishdata()
async function dishdata() {

    let data = await getfood();
    showdata(data)

}


let timerId;
function debounce(func, delay) {

    if (timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(function () {

        func();
    }, delay);

}

function showdata(data) {
    document.querySelector("#box").innerHTML = ""

    console.log(data.meals)
    data.meals.map(function (data) {
        let div1 = document.createElement('div');
        div1.setAttribute("id", "div1");

        let poster = document.createElement('img');
        poster.setAttribute("id", "poster");
        poster.src = data.strMealThumb

        let name = document.createElement('p');
        name.setAttribute("id", "dishname");
        name.innerHTML = `Dish - ${data.strMeal}`

        let area = document.createElement('p');
        area.setAttribute("id", "disharea");
        area.innerHTML = `Country - ${data.strArea}`

        div1.append(poster, name, area)

        div1.addEventListener("click", function () {
            lsd(data)
        })
        document.querySelector("#box").append(div1)


    })

}
let arr = []
function lsd(data) {

    arr.push(data)
    localStorage.setItem("dishdata", JSON.stringify(arr))

    window.location.href = 'details.html';
}
