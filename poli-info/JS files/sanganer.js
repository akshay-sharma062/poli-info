// JavaScript for toggling between candidates based on year selection
const c1 = document.getElementById("can2024");
const c2 = document.getElementById("can2019");
const c3 = document.getElementById("can2014");

const dis1 = document.getElementById("candidate2024");
const dis2 = document.getElementById("candidate2019");
const dis3 = document.getElementById("candidate2014");

const nameElement = document.getElementById("name");
const partyElement = document.getElementById("party");
const votePerElement = document.getElementById("voteper");
const imageElement = document.getElementById("image");

c1.addEventListener("click", function () {
    dis1.style.display = "flex";
    dis2.style.display = "none";
    dis3.style.display = "none";
    nameElement.textContent = "Bhajan Lal Sharma";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>INC</td><td>58.44%</td></tr>
            <tr><td>BJP</td><td>39.08%</td></tr>
            <tr><td>Other</td><td>02.48%</td></tr>
        </table>`;
    imageElement.src = "../images/BhajanLalaSharma.png"; // Replace with actual image path for Bhajan Lal
});

c2.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "flex";
    dis3.style.display = "none";
    nameElement.textContent = "Ashok Lahoty";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>INC</td><td>51.51%</td></tr>
            <tr><td>BJP</td><td>34.61%</td></tr>
            <tr><td>Other</td><td>13.88%</td></tr>
        </table>`;
    imageElement.src = "../images/AshokLahoty.jpg"; // Replace with actual image path for Ashok Lahoty
});

c3.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "none";
    dis3.style.display = "flex";
    nameElement.textContent = "Ghanshyam Tiwari";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>65.59%</td></tr>
            <tr><td>INC</td><td>27.48%</td></tr>
            <tr><td>Other</td><td>6.93%</td></tr>
        </table>`;
    imageElement.src = "../images/GhanshyamTiwari.jpg"; // Replace with actual image path for Ghanshyam Tiwari
});


    function goBack() {
        window.history.back();
    }
