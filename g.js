const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");
const images = document.getElementById("images");
const dots = document.querySelectorAll(".dot"); // Select all elements with class "dot"

const imageList=["g1","g2","g3","g4"];
let imageIndex = 0;

// Function to update the image source and highlight the active dot
function updateImage() {
    images.src = "img/g/" + imageList[imageIndex] + ".jpg";
    // Loop through all dots and remove the "active" class
    dots.forEach((dot, index) => {
        if (index === imageIndex) {
            dot.classList.add("active"); // Add "active" class to the current dot
        } else {
            dot.classList.remove("active"); // Remove "active" class from other dots
        }
    });
}

nextBtn.onclick = () => {
    if (imageIndex < 3) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    updateImage(); // Update the image and dot status
};

previousBtn.onclick = () => {
    if (imageIndex > 0) {
        imageIndex--;
    } else {
        imageIndex = 3;
    }
    updateImage(); // Update the image and dot status
};

// Function to handle dot click
function currentSlide(index) {
    imageIndex = index - 1; // Subtract 1 because the index is 0-based
    updateImage(); // Update the image and dot status
}

// Initial update when the page loads
updateImage();
