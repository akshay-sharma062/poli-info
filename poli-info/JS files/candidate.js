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
    nameElement.textContent = "Rafeek Khan";
    partyElement.textContent = "(INC)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>INC</td><td>50.78%</td></tr>
            <tr><td>BJP</td><td>42.72%</td></tr>
            <tr><td>Other</td><td>2.66%</td></tr>
        </table>`;
    imageElement.src = "../images/rafeek-khan.jpg"; // Replace with actual image path for Bhajan Lal
});

c2.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "flex";
    dis3.style.display = "none";
    nameElement.textContent = "Rafeek Khan";
    partyElement.textContent = "(INC)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>INC</td><td>44.84%</td></tr>
            <tr><td>BJP</td><td>39.29%</td></tr>
            <tr><td>Other</td><td>2.12%</td></tr>
        </table>`;
    imageElement.src = "../images/rafeek-khan.jpg"; // Replace with actual image path for Ashok Lahoty
});

c3.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "none";
    dis3.style.display = "flex";
    nameElement.textContent = "Ashok Parnami";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>47.22%</td></tr>
            <tr><td>INC</td><td>44.66%</td></tr>
            <tr><td>Other</td><td>1.62%</td></tr>
        </table>`;
    imageElement.src = "../images/ashok-parnami.jpg"; // Replace with actual image path for Ghanshyam Tiwari
});


    function goBack() {
        window.history.back();
    }
