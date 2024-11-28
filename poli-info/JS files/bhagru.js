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
    nameElement.textContent = "Kailash Chand Varma";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>  <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>56.54%</td></tr>
                    <tr><td>INC</td><td>38.92%</td></tr>
                    <tr><td>Other</td><td>04.54%</td></tr>
        </table>`;
    imageElement.src = "../images/kailashchand.jpg"; // Replace with actual image path for Bhajan Lal
});

c2.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "flex";
    dis3.style.display = "none";
    nameElement.textContent = "Ganga Devi";
    partyElement.textContent = "(INC)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>INC</td><td>44.77%</td></tr>
            <tr><td>BJP</td><td>42.30%</td></tr>
            <tr><td>Other</td><td>12.93%</td></tr>
        </table>`;
    imageElement.src = "../images/gangadevi.jpg"; // Replace with actual image path for Ashok Lahoty
});

c3.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "none";
    dis3.style.display = "flex";
    nameElement.textContent = "Kailash Chand Varma";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>57.34%</td></tr>
            <tr><td>INC</td><td>31.01%</td></tr>
            <tr><td>Other</td><td>11.65%</td></tr>
        </table>`;
    imageElement.src = "../images/kailashchand.jpg"; // Replace with actual image path for Ghanshyam Tiwari
});


    function goBack() {
        window.history.back();
    }
