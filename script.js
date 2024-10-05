// Get the components and lab area
const labArea = document.getElementById("lab-area");
const battery = document.getElementById("battery");
const resistor = document.getElementById("resistor");
// Example: Calculate current for a 9V battery and 100 Ohm resistor
let voltage = 9; // Volts
let resistance = 100; // Ohms
let current = calculateOhmsLaw(voltage, resistance);
console.log("Current: " + current + " A");  // Output: Current: 0.09 A

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
function calculateOhmsLaw(voltage, resistance) {
    const current = voltage / resistance;
    return current;
}
