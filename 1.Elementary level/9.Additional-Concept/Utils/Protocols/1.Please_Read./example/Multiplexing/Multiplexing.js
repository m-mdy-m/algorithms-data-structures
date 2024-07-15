const streams = [
  ["A1", "A2", "A3", "A4"],
  ["B1", "B2", "B3", "B4"],
  ["C1", "C2", "C3", "C4"],
];

function startSimulation() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "Starting TDM Simulation...\n";
  let timeSlot = 0;
  const interval = setInterval(() => {
    let output = `Time Slot ${timeSlot + 1}: `;
    streams.forEach((stream, index) => {
      if (timeSlot < stream.length) {
        output += stream[timeSlot] + " ";
      }
    });
    outputDiv.innerHTML += output + "\n";
    timeSlot++;
    if (timeSlot >= Math.max(...streams.map((s) => s.length))) {
      clearInterval(interval);
      outputDiv.innerHTML += "Simulation Complete.";
    }
  }, 1000);
}
