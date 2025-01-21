// Defining the Utils module as an object
const Utils = {
  // calculateNumber function as a property
  calculateNumber: function(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) return "Error";
      return Math.round(a) / Math.round(b);
    }
  }
};

// Export the Utils module
module.exports = Utils;
