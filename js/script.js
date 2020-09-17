let API = 'https://periodictable.p.rapidapi.com/?rapidapi-key=df774794c4mshb53d706f8e64e5cp1f2e62jsn27e7fe71a7d2';

axios.get(API)
    .then(function (response) {

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

    });


            // let atomicNumberAll = []
        // let symbolAll = []
        // let elementNameAll = []


        // let f = document.getElementById('first')
        // f.innerHTML = `< p > ${atomicNumberAll}</p > `.replace(/,/g, '');

        // let s = document.getElementById('symbol')
        // s.innerHTML = `< p > ${x}</p > `.replace(/,/g, '');

        // let n = document.getElementById('name')
        // n.innerHTML = `< p > ${y}</p > `.replace(/,/g, '');






        //             for(i = 0; i < 100; i++) {

        //     // let atomicNumber = response.data[i]['atomicNumber'];
        //     // atomicNumberAll.push(atomicNumber + '<br />')
        //     // console.log(atomicNumber);

        //     let symbol = response.data[i]['symbol'];
        //     symbolAll.push(symbol + '<br />')
        //     console.log(symbol);

        //     let elementName = response.data[i]['name'] + '<br />';
        //     elementNameAll.push(elementName)
        //     // console.log(elementNameAll)



        // }




        // START use this 15Sep concatenate
        // let mergedElementsInfo = atomicNumberAll.concat(symbolAll, elementNameAll)
        // let mergedElementsInfo2 = symbolAll.concat(elementNameAll)
        // console.log(mergedElementsInfo2)
        // END




        // START - how to append
        // let appendThis = document.getElementById('appendThis');
        // let row = document.createElement('td')
        // row.innerHTML = mergedElementsInfo2
        // appendThis.append(mergedElementsInfo2)
        // END


        // //START CLONE
        // let newRow = document.getElementById('appendThis');
        // let listChildren = newRow.children

        // let rowItem = listChildren[1]
        // let rowItemCopy = rowItem.cloneNode(true);

        // newRow.appendChild(rowItemCopy)
        // newRow.appendChild(mergedElementsInfo2)
        //END





        // UNUSED 
        // let s = document.getElementById('symbol')
        // s.innerHTML = `< p > ${x}</p > `.replace(/,/g, '');

        // let n = document.getElementById('name')
        // n.innerHTML = `< p > ${y}</p > `.replace(/,/g, '');
        // //END


        // START how to follow through?
        // let e = document.getElementById('main')
        // e.innerHTML = `< p > ${tableHeaders}</p > `.replace(/,/g, '') + `<br>` + ` < p > ${x}</p > `.replace(/,/g, '') + ` < p > ${y}</p > `.replace(/,/g, '');
        //END


        // START 15Sep duplicate
        // let f = document.getElementById('first')
        // f.innerHTML = `< p > ${tableHeaders}</p > `.replace(/,/g, '');

        // let s = document.getElementById('symbol')
        // s.innerHTML = `< p > ${x}</p > `.replace(/,/g, '');

        // let n = document.getElementById('name')
        // n.innerHTML = `< p > ${y}</p > `.replace(/,/g, '');
        //END    