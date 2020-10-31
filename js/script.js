let API = 'https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2';

axios.get(API)
    .then(function (response) {

        let allData = response.data;

        // modal Sodium
        let sod = allData[10];

        document.getElementById('sodium').innerHTML =
            `<div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class='modal-footer'>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        </div>
        <div class='modal-body' style='margin: 2em;'>
        <div>
                <h1 class='card-symbol'>${sod.symbol}</h1>
                <h3 class='card-name'>${sod.name}</h3>
                <h5 class='card-groupBlock'>${sod.groupBlock}</h5>
                <h5 class='card-facts'>Facts: ${sod.facts}</h5>
                <h5 class='card-yearDiscovered'>Year Discovered: ${sod.yearDiscovered}</h5>
                <h5 class='card-history'>History: ${sod.history}</h5>
                </div>
                </div>
        </div>
        </div>
        </div>`


        // modal Magnesium
        let magnes = allData[11];

        document.getElementById('magnesium').innerHTML =
            `<div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class='modal-footer'>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        </div>
        <div class='modal-body' style='margin: 2em;'>
        <div>
                <h1 class='card-symbol'>${magnes.symbol}</h1>
                <h3 class='card-name'>${magnes.name}</h3>
                <h5 class='card-groupBlock'>${magnes.groupBlock}</h5>
                <h5 class='card-facts'>Facts: ${magnes.facts}</h5>
                <h5 class='card-yearDiscovered'>Year Discovered: ${magnes.yearDiscovered}</h5>
                <h5 class='card-history'>History: ${magnes.history}</h5>
                </div>
                </div>
        </div>
        </div>
        </div>`


        // modal Calcium
        let calc = allData[19];

        document.getElementById('calcium').innerHTML =
            `<div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class='modal-footer'>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        </div>
        <div class='modal-body' style='margin: 2em;'>
        <div>
                <h1 class='card-symbol'>${calc.symbol}</h1>
                <h3 class='card-name'>${calc.name}</h3>
                <h5 class='card-groupBlock'>${calc.groupBlock}</h5>
                <h5 class='card-facts'>Facts: ${calc.facts}</h5>
                <h5 class='card-yearDiscovered'>Year Discovered: ${calc.yearDiscovered}</h5>
                <h5 class='card-history'>History: ${calc.history}</h5>
                </div>
                </div>
        </div>
        </div>
        </div>`


        // modal Potassium
        let potassium = allData[18];

        document.getElementById('potass').innerHTML =
            `<div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class='modal-footer'>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        </div>
        <div class='modal-body' style='margin: 2em;'>
        <div>
                <h1 class='card-symbol'>${potassium.symbol}</h1>
                <h3 class='card-name'>${potassium.name}</h3>
                <h5 class='card-groupBlock'>${potassium.groupBlock}</h5>
                <h5 class='card-facts'>Facts: ${potassium.facts}</h5>
                <h5 class='card-yearDiscovered'>Year Discovered: ${potassium.yearDiscovered}</h5>
                <h5 class='card-history'>History: ${potassium.history}</h5>
                </div>
                </div>
        </div>
        </div>
        </div>`

        // #2Nonmetal START search filter
        let filterNonMetal = allData.filter(function (nonMetal) {
            if (nonMetal.groupBlock === 'nonmetal') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental3 = filterNonMetal.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByNonMetal').innerHTML = elemental3

        //END


        // #3NobleGases START search filter
        let filterNobleGases = allData.filter(function (nobleGas) {
            if (nobleGas.groupBlock === 'noble gas') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental4 = filterNobleGases.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByNobleGases').innerHTML = elemental4

        //END


        // #4Halogen START search filter
        let filterHalogen = allData.filter(function (halogen) {
            if (halogen.groupBlock === 'halogen') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental5 = filterHalogen.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByHalogen').innerHTML = elemental5

        //END


        // #5Metalloid START search filter
        let filterMetalloid = allData.filter(function (metalloid) {
            if (metalloid.groupBlock === 'metalloid') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental6 = filterMetalloid.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByMetalloid').innerHTML = elemental6

        //END


        // #6Metal START search filter
        let filterMetal = allData.filter(function (metal) {
            if (metal.groupBlock === 'metal') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental7 = filterMetal.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByMetal').innerHTML = elemental7

        //END


        // #7Lanthanoid START search filter
        let filterlanthanoid = allData.filter(function (lanthanoid) {
            if (lanthanoid.groupBlock === 'lanthanoid') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental8 = filterlanthanoid.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByLanthanoid').innerHTML = elemental8

        //END


        // #8Actinoid START search filter
        let filterlActinoid = allData.filter(function (actinoid) {
            if (actinoid.groupBlock === 'actinoid') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental9 = filterlActinoid.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByActinoid').innerHTML = elemental9

        //END


        // #9Transition Metal START search filter
        let filterlTransitionMetal = allData.filter(function (transitionMetal) {
            if (transitionMetal.groupBlock === 'transition metal') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental10 = filterlTransitionMetal.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByTransitionMetal').innerHTML = elemental10

        //END


        // #10Alkali Metal START search filter
        let filterlAlkaliMetal = allData.filter(function (alkaliMetal) {
            if (alkaliMetal.groupBlock === 'alkali metal') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental11 = filterlAlkaliMetal.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByAlkaliMetal').innerHTML = elemental11

        //END


        // #11Alkali Earth Metal START search filter
        let filterlAlkaline = allData.filter(function (alkaline) {
            if (alkaline.groupBlock === 'alkaline earth metal') {
                return true;
            }
        });

        // Show filtered data in html using map 
        let elemental12 = filterlAlkaline.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('searchByAlkaline').innerHTML = elemental12

        //END


        // #12 All Elements START search filter
        let elemental = response.data.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5>${data.atomicNumber}</h5>
                    <h2>${data.symbol}</h2>
                    <h5>${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('finalCard').innerHTML = elemental

        //END


        // ALL ELEMENTS 
        let searchElement = allData.map(data => {
            return `<div class="card" id="${data.groupBlock}" style="width: 25rem">
                        <h1 id="card-symbol">${data.symbol}</h1>
                        <h3 id="card-name">${data.name}</h3>
                        <h5 id="card-groupBlock">${data.groupBlock}</h5>
                        <h5 id="facts">Facts: ${data.facts}</h5>
                        <h5 id="yearDiscovered">Year Discovered: ${data.yearDiscovered}</h5>
                        </div>`
        }).join("")

        document.getElementById('elementList').innerHTML = searchElement
        // END


        axios.get('https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2')
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



        // ===== Scroll to Top ===== 
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


        // ===== add accordion mode ===== 
        $("#nobleGasesCollapse").collapse('show');
        changeBtnColor();
        $("button[name='nobleGasesCollapse']").addClass("btn btn-primary");

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

    });
