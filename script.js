// Function to display current date in MM/DD/YYYY format
function display_date() {
    const Today = new Date();
    let ThisDay = Today.getDate();
    let ThisMonth = Today.getMonth() + 1; // Months are zero-based
    let ThisYear = Today.getFullYear();
    let strDate = "Today's date: " + ThisMonth + "/" + ThisDay + "/" + ThisYear;

    // Ensure the correct ID is used in HTML
    let dateElement = document.getElementById("curndate");

    if (dateElement) {
        dateElement.innerHTML = strDate;
        console.log("✅ Date successfully updated:", strDate);
    } else {
        console.error("❌ Error: Element with ID 'curndate' not found.");
    }
}

// Function to check computed styles to avoid `cssRules` error
function checkComputedStyles() {
    const element = document.querySelector('.bottom-container');
    if (element) {
        const styles = getComputedStyle(element);
        console.log("✅ Background color:", styles.getPropertyValue('background-color'));
        console.log("✅ Text color:", styles.getPropertyValue('color'));
        console.log("✅ Font family:", styles.getPropertyValue('font-family'));
    } else {
        console.error("❌ Error: Element with class 'bottom-container' not found.");
    }
}

// Ensure JavaScript runs **only after** the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    display_date(); // Ensure the date is set correctly
    checkComputedStyles(); // Validate computed styles
});
