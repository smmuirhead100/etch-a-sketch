const container = document.querySelector('#container');


function createGrid(x) {
    for (rows = 0; rows < x; rows++) {
        const rw = document.createElement('div');
        rw.classList.add(rows);
        for (col = 0; col < x; col ++) {
            const cl = document.createElement('div');
            cl.classList.add(col);
            rw.appendChild(cl)}
        container.appendChild(rw);
    }
}

createGrid(16)