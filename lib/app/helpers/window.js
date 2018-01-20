/**
 * Scroll Monitor
 *
 * @param {Object} window - device window
 * @param {Function} fn - function to be execute on scroll
 */
const scrollMonitor = (window, fn) => window.addEventListener('scroll', fn);


/**
 * Scroll Window
 *
 * @param {number} axisX - position to scroll on axis X
 * @param {number} axisY - position to scroll on axis Y
 */
const scrollWindow = (axisX = 0, axisY = 0) => window.scrollTo(axisX, axisY);

module.exports.scrollMonitor = scrollMonitor;
module.exports.scrollWindow = scrollWindow;
