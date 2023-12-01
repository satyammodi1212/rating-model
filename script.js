let ratingEls = document.querySelectorAll(".rating");
let btnEl = document.getElementById("btn");

let containerEl = document.getElementById("container");

let model = "";
let ratingSl = document.querySelectorAll(".rating-stars");
let searchEl  = document.getElementById("search");
let stars = document.querySelector('.rating.active .rating-stars');
// let butEl = document.getElementById("button");

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        model = event.target.innerText || event.target.parentNode.innerText;
        // console.log(model);
        ratingSl = event.target.innerHTML || event.target.parentNode.innerHTML;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
        stars = document.querySelector('.rating.active .rating-stars');
        console.log(stars);

    });
    // ratingSl.addEventListener("click",(event))
});



btnEl.addEventListener("click", () => {
    if (model !== "") {
        containerEl.innerHTML = `
        <strong>Thank you! </strong>
        <strong>Waah Kya Soch Hai Teri </strong>
        <br>
        <br>
        <strong>Feedback: ${model}</strong>
        <br>
        <br>
        <strong>${ratingSl}</strong>
        <p>Dear ${searchEl.value} Your Girlfriend Request is Submite</p>
        <button id="btne" type="submit" onclick="return locationreload();" class="btn btn-success">Play Again</button>     
        `;
    }
    
  
})



function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}

function locationreload() {
    location.reload();
}
