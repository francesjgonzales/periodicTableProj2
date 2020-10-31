let API = 'https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2';

axios.get(API)
    .then(function (response) {
        let allData = response.data;

        let hydrogen = response.data[0];
        let carbon = response.data[5];
        let oxygen = response.data[8];

        let nitrogen = response.data[6];
        let calcium = response.data[19];
        let phosphorus = response.data[14];

        // let selectedElements = [hydrogen, carbon, oxygen, nitrogen, calcium, phosphorus]
        // console.log(selectedElements)

        document.getElementById('hydrogen').innerHTML =
            `<div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class='modal-footer'>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
            </div>
            <div class='modal-body' style='margin: 2em;'>
            <div>
                    <h1 class='card-symbol'>${hydrogen.symbol}</h1>
                    <h3 class='card-name'>${hydrogen.name}</h3>
                    <h5 class='card-groupBlock'>${hydrogen.groupBlock}</h5>
                    <h5 class='card-facts'>Facts: ${hydrogen.facts}</h5>
                    <h5 class='card-yearDiscovered'>Year Discovered: ${hydrogen.yearDiscovered}</h5>
                    <h5 class='card-history'>History: ${hydrogen.history}</h5>
                    </div>
                    </div>
            </div>
            </div>
            </div>`

        document.getElementById('carbon').innerHTML =
            `<div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class='modal-footer'>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
            </div>
            <div class='modal-body' style='margin: 2em;'>
            <div>
                    <h1 class='card-symbol'>${carbon.symbol}</h1>
                    <h3 class='card-name'>${carbon.name}</h3>
                    <h5 class='card-groupBlock'>${carbon.groupBlock}</h5>
                    <h5 class='card-facts'>Facts: ${carbon.facts}</h5>
                    <h5 class='card-yearDiscovered'>Year Discovered: ${carbon.yearDiscovered}</h5>
                    <h5 class='card-history'>History: ${carbon.history}</h5>
                    </div>
                    </div>
            </div>
            </div>
            </div>`

        document.getElementById('oxygen').innerHTML =
            `<div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class='modal-footer'>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
            </div>
            <div class='modal-body' style='margin: 2em;'>
            <div>
                    <h1 class='card-symbol'>${oxygen.symbol}</h1>
                    <h3 class='card-name'>${oxygen.name}</h3>
                    <h5 class='card-groupBlock'>${oxygen.groupBlock}</h5>
                    <h5 class='card-facts'>Facts: ${oxygen.facts}</h5>
                    <h5 class='card-yearDiscovered'>Year Discovered: ${oxygen.yearDiscovered}</h5>
                    <h5 class='card-history'>History: ${oxygen.history}</h5>
                    </div>
                    </div>
            </div>
            </div>
            </div>`

        document.getElementById('calcium').innerHTML =
            `<div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class='modal-footer'>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
            </div>
            <div class='modal-body' style='margin: 2em;'>
            <div>
                    <h1 class='card-symbol'>${calcium.symbol}</h1>
                    <h3 class='card-name'>${calcium.name}</h3>
                    <h5 class='card-groupBlock'>${calcium.groupBlock}</h5>
                    <h5 class='card-facts'>Facts: ${calcium.facts}</h5>
                    <h5 class='card-yearDiscovered'>Year Discovered: ${calcium.yearDiscovered}</h5>
                    <h5 class='card-history'>History: ${calcium.history}</h5>
                    </div>
                    </div>
            </div>
            </div>
            </div>`

        document.getElementById('nitrogen').innerHTML =
            `<div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class='modal-footer'>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
            </div>
            <div class='modal-body' style='margin: 2em;'>
            <div>
                    <h1 class='card-symbol'>${nitrogen.symbol}</h1>
                    <h3 class='card-name'>${nitrogen.name}</h3>
                    <h5 class='card-groupBlock'>${nitrogen.groupBlock}</h5>
                    <h5 class='card-facts'>Facts: ${nitrogen.facts}</h5>
                    <h5 class='card-yearDiscovered'>Year Discovered: ${nitrogen.yearDiscovered}</h5>
                    <h5 class='card-history'>History: ${nitrogen.history}</h5>
                    </div>
                    </div>
            </div>
            </div>
            </div>`

        document.getElementById('phosphorus').innerHTML =
            `<div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class='modal-footer'>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
            </div>
            <div class='modal-body' style='margin: 2em;'>
            <div>
                    <h1 class='card-symbol'>${phosphorus.symbol}</h1>
                    <h3 class='card-name'>${phosphorus.name}</h3>
                    <h5 class='card-groupBlock'>${phosphorus.groupBlock}</h5>
                    <h5 class='card-facts'>Facts: ${phosphorus.facts}</h5>
                    <h5 class='card-yearDiscovered'>Year Discovered: ${phosphorus.yearDiscovered}</h5>
                    <h5 class='card-history'>History: ${phosphorus.history}</h5>
                    </div>
                    </div>
            </div>
            </div>
            </div>`




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

