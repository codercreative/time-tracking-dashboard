// Async function to fetch and return time tracking data from data.json
async function fetchData() {
  try {
    //Fetch data from the JSON file
    const response = await fetch("data.json");
    const data = await response.json();

    //Set default view to "weekly"
    updateTimeDisplay(data, "weekly");

    // Add event listeners to the timeframe buttons
    document
      .getElementById("daily")
      .addEventListener("click", () => updateTimeDisplay(data, "daily"));
    document
      .getElementById("weekly")
      .addEventListener("click", () => updateTimeDisplay(data, "weekly"));
    document
      .getElementById("monthly")
      .addEventListener("click", () => updateTimeDisplay(data, "monthly"));
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

//Call fetchData to initiate the data retrieval process
fetchData();

//Function to update content inside each card based on the selected timeframe
function updateTimeDisplay(data, selectedTimeframe) {
  //Iterate over each activity in the data array
  data.forEach((activity) => {
    // Convert the activity title to lowercase to match the corresponding class name
    const activityName = activity.title.toLowerCase();

    // Select the info-card div for the current activity
    const activityCard = document.querySelector(`.info-card.${activityName}`);

    if (activityCard) {
      //Select the div where the time data will be displayed
      const timeDisplay = activityCard.querySelector(".time-display");

      if (timeDisplay) {
        // Use destructuring assignment to extract the current and previous time values for the selected timeframe
        // Ensure that the property names (current and previous) match those in the JSON file
        const { current, previous } = activity.timeframes[selectedTimeframe];

        // Set the label for previous time based on the selected timeframe
        let previousLabel;
        switch (selectedTimeframe) {
          case "daily":
            previousLabel = "Yesterday";
            break;
          case "weekly":
            previousLabel = "Last Week";
            break;
          case "monthly":
            previousLabel = "Last Month";
            break;
          default:
            previousLabel = "";
            break;
        }
        // Update the inner HTML of the timeDisplay element with the current and previous time values
        timeDisplay.innerHTML = `
          <span class="current">
            ${current}hr${current === 1 ? "" : "s"}
          </span>
          <span class="previous">
            ${previousLabel} - ${previous}hr${previous === 1 ? "" : "s"}
          </span>
        `;
      }
    }
  });
}
