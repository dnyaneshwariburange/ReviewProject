const reviews = [
    "Great team player with excellent communication skills.",
    "Needs improvement in time management.",
    "Outstanding performance in the last project.",
    "Should focus more on deadlines.",
    "Demonstrates strong leadership abilities."
];

function addReview() {
    const reviewInput = document.getElementById("reviewInput").value;
    if (reviewInput.trim() !== "") {
        reviews.push(reviewInput);
        document.getElementById("reviewInput").value = "";
        displayReviews();
    } else {
        alert("Please enter a review.");
    }
}

function removeLastReview() {
    if (reviews.length > 0) {
        reviews.pop();
        displayReviews();
    } else {
        alert("No reviews to remove.");
    }
}

function randomReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    alert("Random Review: " + reviews[randomIndex]);
}

function displayReviews() {
    const reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";
    reviews.forEach((review, index) => {
        const div = document.createElement("div");
        div.className = "review-item";
        div.textContent = `${index + 1}. ${review}`;
        reviewList.appendChild(div);
    });
}

// Initial display
displayReviews();

