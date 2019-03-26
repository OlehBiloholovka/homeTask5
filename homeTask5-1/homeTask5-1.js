const mountains = Object.freeze({ data: [
        {
            'name': 'Hoverla',
            'height': 2061,
            'place': 'Ukraine'
        },
        {
            'name': 'Svyataya',
            'height': 345,
            'place': 'Belarus'
        },
        {
            'name': 'Rysy',
            'height': 2503,
            'place': 'Poland'
        },
        {
            'name': 'Gerlach',
            'height': 2655,
            'place': 'Slovakia'
        },
        {
            'name': 'Kekes',
            'height': 1014,
            'place': 'Hungary'
        },
        {
            'name': 'Moldoveanu',
            'height': 2544,
            'place': 'Romania'
        },
        {
            'name': 'Bălănești',
            'height': 430,
            'place': 'Moldova'
        }
    ]});
let mountainsContainer = document.getElementById('mountains');

function insertMountainData(mountainData) {
    let table = document.createElement('table');
    table.setAttribute('class','table table-sm table-bordered table-dark');
    mountainsContainer.appendChild(table);
    makeTable(mountainData, table);
}
function makeTable(data, table) {
    // data.data.sort((m1, m2) => m2.height - m1.height);
    data.data.forEach((m, i) => {
        if (i === 0) {
            createTableRow(table, m, 'th');
        }
        createTableRow(table, m);
    });
}
function createTableRow(table, o, rowElement = 'td') {
    let tr = document.createElement('tr');
    Object.keys(o).forEach(k => {
        let td = document.createElement(rowElement);
        let textNode = document.createTextNode(rowElement === 'th' ? k.toUpperCase() : o[k]);
        td.appendChild(textNode);
        tr.appendChild(td);
    });
    table.appendChild(tr);
}

insertMountainData(mountains);