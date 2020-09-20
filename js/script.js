let API = 'https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2';

axios.get(API)
    .then(function (response) {

        let allData = response.data
        console.log(allData)


        // START 16Sep code
        let atomAll = response.data.map(atomNumber => {
            return `<td>${atomNumber.atomicNumber} </td>`
        }).join('')
        // console.log(atomAll)
        document.getElementById('atomTemplate').innerHTML = atomAll

        let symbolAll = response.data.map(elementSymbol => {
            return `<td>${elementSymbol.symbol} </td>`
        }).join('')
        // console.log(symbolAll)
        document.getElementById('symbolTemplate').innerHTML = symbolAll

        let elementNameAll = response.data.map(elementName => {
            return `<td>${elementName.name} </td>`
        }).join('')
        // console.log(symbolAll)
        document.getElementById('elementNameTemplate').innerHTML = elementNameAll
        // END



        // START groupBy using reduce() according to groupBlock
        let groupByBlock = (groupBlock, arr) => arr.reduce((cache, allData) =>
            ({
                ...cache, [allData[groupBlock]]:
                    allData[groupBlock] in cache
                        ? cache[allData[groupBlock]].concat(allData)
                        : [allData]
            }),
            {}
        )
        console.log(groupByBlock('groupBlock', allData))
        // END groupBy using reduce()

        // START display groupBlock data in browser
        let groupElements = groupByBlock('groupBlock', allData)
        console.log(groupElements)
        document.getElementById('dataSorted').innerHTML = `${groupElements} `
        // END display groupBlock



        // START display JSON data in table 
        // let tableTemplate = ""
        // allData.forEach((head) => {
        //     tableTemplate += "<tr>";
        //     tableTemplate += "<td>" + head.atomicNumber + "</td>"
        //     tableTemplate += "<td>" + head.symbol + "</td>"
        //     tableTemplate += "<td>" + head.name + "</td>"
        //     tableTemplate += "<td>" + head.yearDiscovered + "</td>"
        //     tableTemplate += "<td>" + head.groupBlock + "</td>"
        //     // tableTemplate += "<td>" + head.facts + "</td>"
        //     tableTemplate += "<td>" + head.standardState + "</td>"
        //     tableTemplate += "<td id='history'>" + head.history + "</td>"

        // })
        // document.getElementById('data').innerHTML = tableTemplate
        // console.log(tableTemplate)
        // END display JSON data



        //START map flexbox
        let elemental = response.data.map(data => {
            return `<div class="card" style="width: 10rem;" id="${data.groupBlock}">
                    <h5 id="card-number">${data.atomicNumber}</h5>
                    <h2 id="card-symbol">${data.symbol}</h2>
                    <h5 id="card-name">${data.name}</h5>
                    </div>`
        }).join("")

        document.getElementById('finalCard').innerHTML = elemental

        //END



        //START showMore
        let elemental2 = response.data.map(data => {
            return `<div class="card" id="${data.groupBlock}" style="width: 50rem">
                    <h1 id="card-symbol">${data.symbol}</h1>
                    <h3 id="card-name">${data.name}</h3>
                    <h5 id="card-groupBlock">${data.groupBlock}</h5>
                    <p id="history">${data.history}</p>
                    </div>`
        }).join("")

        document.getElementById('showMore').innerHTML = elemental2

        //END


    })


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


