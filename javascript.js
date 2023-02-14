const container = document.querySelector('#container');


function createGrid(x) {
    for (rows = 1; rows <= x; rows++) {
        const rw = document.createElement('div');
        rw.classList.add('row');
        for (col = 1; col <= x; col ++) {
            const cl = document.createElement('div1');
            cl.classList.add('col');
            rw.appendChild(cl)}
        container.appendChild(rw);
    }
}

function createGridStarter() {
    let num = prompt("How big do you want your grid? (0-16)")
    createGrid(num);
}

const btn = document.querySelector('#bt'); 
btn.addEventListener('click', () => {
    createGridStarter();
})
