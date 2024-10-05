// Get the components and lab area
const labArea = document.getElementById("lab-area");
const battery = document.getElementById("battery");
const resistor = document.getElementById("resistor");

let draggedElement = null;

// Enable dragging for components
document.querySelectorAll('.component').forEach(component => {
    component.addEventListener('dragstart', dragStart);
    component.addEventListener('dragend', dragEnd);
});

labArea.addEventListener('dragover', dragOver);
labArea.addEventListener('drop', drop);

// Drag and Drop Functions
function dragStart(e) {
    draggedElement = e.target;
    e.dataTransfer.setData('text/plain', '');
}

function dragEnd() {
    draggedElement = null;
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    
    const x = e.clientX - labArea.offsetLeft;
    const y = e.clientY - labArea.offsetTop;

    draggedElement.style.left = x + 'px';
    draggedElement.style.top = y + 'px';
    
    labArea.appendChild(draggedElement);
}
