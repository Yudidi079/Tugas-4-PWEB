let indexR1 = 0;
let indexR2 = 0;

function toggleLamp(lamp) {
  if (lamp.src.includes('pic_bulboff.gif')) {
    lamp.src = 'pic_bulbon.gif';
  } else {
    lamp.src = 'pic_bulboff.gif';
  }
}

function toggleOne(containerId) {
  const lamps = document.querySelectorAll(`#${containerId} .lamp`);

  if (containerId === 'r1') {
    toggleLamp(lamps[indexR1]);
    indexR1 = (indexR1 + 1) % lamps.length;
  } else {
    toggleLamp(lamps[indexR2]);
    indexR2 = (indexR2 + 1) % lamps.length;
  }
}

function toggleAll(containerId) {
  const lamps = document.querySelectorAll(`#${containerId} .lamp`);
  lamps.forEach(lamp => toggleLamp(lamp));
}

function toggleGroup() {
  const lamps = document.querySelectorAll('#r2 .lamp');

  // A,B
  toggleLamp(lamps[0]);
  toggleLamp(lamps[1]);

  // C,D
  toggleLamp(lamps[2]);
  toggleLamp(lamps[3]);
}