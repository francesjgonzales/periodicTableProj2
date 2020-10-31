let API = 'https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2';

axios.get(API)
    .then(function (response) {
        let allData = response.data;

        let hydrogen = response.data[0];
        let carbon = response.data[7];
        let oxygen = response.data[9];

        let nitrogen = response.data[8];
        let calcium = response.data[21];
        let phosphorus = response.data[16];

        // let selectedElements = [hydrogen, carbon, oxygen, nitrogen, calcium, phosphorus]
        // console.log(selectedElements)

        document.getElementById('hydrogen').innerHTML =
            `<div class='modal' id='hydrogen'>
            <div class="modal-dialog">
                <div class="modal-content">
                <button type='button' class='close' data-dismiss='modal' aria-label='Close' aria-hidden='true'><span>&times;</span></button>
                <div class='modal-body'>
                    <div class='card'>
                    <h1 class='card-symbol'>${hydrogen.symbol}</h1>
                    <h3 class='card-name'>${hydrogen.name}</h3>
                    <h5 class='card-groupBlock'>${hydrogen.groupBlock}</h5>
                    <h5 class='card-facts'>${hydrogen.facts}</h5>
                    <h5 class='card-yearDiscovered'>${hydrogen.yearDiscovered}</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>`



        //     document.getElementById('hydrogen').innerHTML = `<div class='modal' id='hydrogen'>
        //     <div class="modal-dialog">
        //       <div class="modal-content">
        //         <div class='modal-header'>
        //           <div class='modal-title'>
        //             <button type='button' class='close' data-dismiss='modal' aria-label='Close' aria-hidden='true'><span>&times;</span></button>
        //           </div>
        //           <div class='modal-body'>
        //             <div class='card'>
        //               <h1 class='card-symbol'>${hydrogen.symbol}</h1>
        //               <h3 class='card-name'>${hydrogen.name}</h3>
        //               <h5 class='card-groupBlock'>${hydrogen.groupBlock}</h5>
        //               <h5 class='card-facts'>${hydrogen.facts}</h5>
        //               <h5 class='card-yearDiscovered'>${hydrogen.yearDiscovered}</h5>
        //             </div>
        //           </div>

        //         </div>

        //       </div>
        //     </div>
        // </div>`






        //     <h1 class='card-symbol' > ${ hydrogen.symbol }</h1 >
        // <h3 class='card-name'>${hydrogen.name}</h3>
        // <h5 class='card-groupBlock'>${hydrogen.groupBlock}</h5>
        // <h5 class='card-facts'>Facts: ${hydrogen.facts}</h5>
        // <h5 class='card-yearDiscovered'>Year Discovered: ${hydrogen.yearDiscovered}</h5>














        // let carb = response.data[7];
        // document.getElementById('carbon').innerHTML = `<div class="card" id="${carb.groupBlock}">
        // <h1 id="card-symbol">${carb.symbol}</h1>
        // <h3 id="card-name">${carb.name}</h3>
        // <h5 id="card-groupBlock">${carb.groupBlock}</h5>
        // <h5 id="facts">Facts: ${carb.facts}</h5>
        // <h5 id="yearDiscovered">Year Discovered: ${carb.yearDiscovered}</h5>
        // <h5 id="history">History: ${carb.history}</h5>
        // </div>`



    });


// ===== add accordion mode ===== 
// $("#hydrogen").collapse('show');
// changeBtnColor();
// $("button[name='hydrogen']").addClass("btn btn-primary");

// function changeBtnColor() {
//     $(".infoCollapse").removeClass("btn btn-primary");
//     $(".infoCollapse").addClass("btn btn-primary");
// }

// function toggleFunction(name) {
//     $(".collapse").collapse('hide');
//     changeBtnColor();
//     setTimeout(function () { openSelected(name) }, 360);
// }

// function openSelected(name) {
//     btnSelection = "button" + "[name=" + name + "]";
//     $(btnSelection).addClass("btn btn-primary");
//     selection = "#" + name;
//     $(selection).collapse("toggle");
// }


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



// $('#exampleModalLabel').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('show') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
// })

$('body').scrollspy({ target: '#mainNav' });
