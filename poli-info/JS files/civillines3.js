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
    dis1.style.display = "none";
    dis2.style.display = "flex";
    dis3.style.display = "none";
    nameElement.textContent = "Gopal Sharma";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>56.89%</td></tr>
            <tr><td>INC</td><td>40.55%</td></tr>
            <tr><td>Other</td><td>0.00%</td></tr>
        </table>`;
                
    imageElement.src = "gps.jpeg"
});
    c2.addEventListener("click",function(){
     dis1.style.display ="none";
     dis2.style.display = "flex" ;
     dis3.style.display = "none";
    nameElement.textContent = "Pratap Singh Khachariyavas";
    partyElement.textContent = "(INC)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>42.53%</td></tr>
            <tr><td>INC</td><td>53.53%</td></tr>
            <tr><td>Other</td><td>1.06%</td></tr>
        </table>`;
    imageElement.src = "../images/Pratap-Singh-Khachariyawas.jpg"; // Replace with actual image path for Ashok Lahoty
});

c3.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "none";
    dis3.style.display = "flex";
    nameElement.textContent = "Arun Chaturvedi";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>51.62%</td></tr>
            <tr><td>INC</td><td>44.23%</td></tr>
            <tr><td>Other</td><td>1.09%</td></tr>
        </table>`;
    imageElement.src = "../images/arc.jpeg";
});

    function goBack() {
        window.history.back();
    }

    function submitComment() {
        const commentInput = document.getElementById('commentInput');
        const commentBox = document.getElementById('commentBox');
    
        if (commentInput.value.trim() !== "") {
            // Create a new comment element
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            newComment.textContent = commentInput.value;
    
            // Append the new comment to the comment box
            commentBox.appendChild(newComment);
    
            // Clear the input field
            commentInput.value = "";
        } else {
            alert("Please enter a comment before submitting.");
        }
    }
    
