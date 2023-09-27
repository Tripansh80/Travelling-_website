const { JSDOM } = require("jsdom");

// Create a DOM environment
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const window = dom.window;
const document = window.document;

// Your original code
document.addEventListener("DOMContentLoaded", function () {
    // Example: Fetch and display popular destinations and latest deals from the server
    fetchDestinations();
    fetchDeals();
});

function fetchDestinations() {
    // Simulate fetching destinations from a server
    const destinations = ["Paris", "New York", "Tokyo", "London"];

    // Display destinations
    const destinationList = document.querySelector("body");
    destinations.forEach((destination) => {
        const destinationItem = document.createElement("div");
        destinationItem.textContent = destination;
        destinationList.appendChild(destinationItem);
    });
}

function fetchDeals() {
    // Simulate fetching deals from a server
    const deals = ["20% off Paris tour", "Last-minute New York package", "Explore Tokyo for less"];

    // Display deals
    const dealsList = document.querySelector("body");
    deals.forEach((deal) => {
        const dealItem = document.createElement("div");
        dealItem.textContent = deal;
        dealsList.appendChild(dealItem);
    });
}
