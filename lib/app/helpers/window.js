/**
 * Created by Charlie on 3/4/2017.
 */

/**
 * Scroll Monitor
 *
 * @param {Object} window - device window
 * @param {Function} fn - function to be execute on scroll
 */
export const scrollMonitor = (window, fn) => window.addEventListener('scroll', fn);


/**
 * Scroll Window
 *
 * @param {number} axisX - position to scroll on axis X
 * @param {number} axisY - position to scroll on axis Y
 */
export const scrollWindow = (axisX = 0, axisY = 0) => window.scrollTo(axisX, axisY);
