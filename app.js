(() => {
    console.log("Script Executed");
})();

async function getNodeAPI(e) {
    const response = await fetch("http://localhost:3000/");
    const data = await response.text();
    const nodeResponseElement = document.getElementById("nodeResponse");
    nodeResponseElement.textContent = data;
}

async function getPythonAPI(e) {
    const response = await fetch("http://localhost:5000/");
    const data = await response.text();
    const pythonResponseElement = document.getElementById("pythonResponse");
    pythonResponseElement.textContent = data;
}