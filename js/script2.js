let API = 'https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2';

axios.get(API)
    .then(function (response) {

        let hydro = response.data[0];
        console.log(hydro)
        document.getElementById('hydrogen').innerHTML = `<div class="card" id="${hydro.groupBlock}">
        <h1 id="card-symbol">${hydro.symbol}</h1>
        <h3 id="card-name">${hydro.name}</h3>
        <h5 id="card-groupBlock">${hydro.groupBlock}</h5>
        <h5 id="facts">Facts: ${hydro.facts}</h5>
        <h5 id="yearDiscovered">Year Discovered: ${hydro.yearDiscovered}</h5>
        <h5 id="history">History: ${hydro.history}</h5>
        </div>`

        let carb = response.data[7];
        document.getElementById('carbon').innerHTML = `<div class="card" id="${carb.groupBlock}">
        <h1 id="card-symbol">${carb.symbol}</h1>
        <h3 id="card-name">${carb.name}</h3>
        <h5 id="card-groupBlock">${carb.groupBlock}</h5>
        <h5 id="facts">Facts: ${carb.facts}</h5>
        <h5 id="yearDiscovered">Year Discovered: ${carb.yearDiscovered}</h5>
        <h5 id="history">History: ${carb.history}</h5>
        </div>`

    });


// ===== add accordion mode ===== 
$("#hydrogen").collapse('show');
changeBtnColor();
$("button[name='hydrogen']").addClass("btn btn-primary");

function changeBtnColor() {
    $(".infoCollapse").removeClass("btn btn-primary");
    $(".infoCollapse").addClass("btn btn-primary");
}

function toggleFunction(name) {
    $(".collapse").collapse('hide');
    changeBtnColor();
    setTimeout(function () { openSelected(name) }, 360);
}

function openSelected(name) {
    btnSelection = "button" + "[name=" + name + "]";
    $(btnSelection).addClass("btn btn-primary");
    selection = "#" + name;
    $(selection).collapse("toggle");
}


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



$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})