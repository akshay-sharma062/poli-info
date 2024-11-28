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
    nameElement.textContent = "Diya Kumari";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>63.31%</td></tr>
            <tr><td>INC</td><td>34.81%</td></tr>
            <tr><td>Other</td><td>0.00%</td></tr>
        </table>`;
                
    imageElement.src = "https://images.tribuneindia.com/cms/gall_content/2019/4/2019_4$largeimg02_Tuesday_2019_064732249.jpg"; // Replace with actual image path for Bhajan Lal
});

c2.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "flex";
    dis3.style.display = "none";
    nameElement.textContent = "Narpat Singh Rajvi";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>75.3%</td></tr>
            <tr><td>INC</td><td>22.8%</td></tr>
            <tr><td>Other</td><td>22.31%</td></tr>
        </table>`;
    imageElement.src = "https://th.bing.com/th/id/OIP.zcbLIrpqIY6Jfq7990qWBwAAAA?w=145&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"; // Replace with actual image path for Ashok Lahoty
});

c3.addEventListener("click", function () {
    dis1.style.display = "none";
    dis2.style.display = "none";
    dis3.style.display = "flex";
    nameElement.textContent = "Narpat Singh Rajvi";
    partyElement.textContent = "(BJP)";
    votePerElement.innerHTML = `
        <table>
            <tr><th>Party</th><th>Vote %</th></tr>
            <tr><td>BJP</td><td>76.48%</td></tr>
            <tr><td>INC</td><td>16.51%</td></tr>
            <tr><td>Other</td><td>1.02%</td></tr>
        </table>`;
    imageElement.src = "https://th.bing.com/th/id/OIP.zcbLIrpqIY6Jfq7990qWBwAAAA?w=145&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"; // Replace with actual image path for Ghanshyam Tiwari
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
    
