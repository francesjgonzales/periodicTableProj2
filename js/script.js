let API = 'https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2';

axios.get(API)
    .then(function (response) {

        let allData = response.data
        console.log(allData)


        //START map flexbox
        let elemental = response.data.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('finalCard').innerHTML = elemental

        //END



        //START showMore
        let elemental2 = response.data.map(data => {
            return `<div class="card" id="${data.groupBlock}" style="width: 45rem">
                    <h1 id="card-symbol">${data.symbol}</h1>
                    <h3 id="card-name">${data.name}</h3>
                    <h5 id="card-groupBlock">${data.groupBlock}</h5>
                    <p id="history">${data.history}</p>
                    </div>`
        }).join("")

        document.getElementById('showMore').innerHTML = elemental2

        //END



    });

axios.get('/user/API')
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });




// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});


function hydrogen() {
    var x = document.getElementById("hydrogen");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function carbon() {
    var x = document.getElementById("carbon");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function oxygen() {
    var x = document.getElementById("oxygen");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function nitrogen() {
    var x = document.getElementById("nitrogen");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function calcium() {
    var x = document.getElementById("calcium");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function calcium() {
    var x = document.getElementById("calcium");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function phosphorus() {
    var x = document.getElementById("phosphorus");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

