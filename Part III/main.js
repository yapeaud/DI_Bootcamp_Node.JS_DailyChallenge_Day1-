// Function to get the current date and time
function getCurrentDateTime() {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  }
  
  // Export the function
  module.exports = getCurrentDateTime;
  