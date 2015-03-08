/****************************************************/
// Filename: ./libs/system.js
// Created: AtlasDev
// Description: Here are system-wide functions defined
/****************************************************/

var colors = require('colors'),
    config = require('./config.js'),
    moment = require('moment');
    
colors.setTheme({
    debug: 'cyan',
    warn: 'yellow',
    error: 'red'
});

/**
 * Give the uncaughtException's some better mark up and exits after that
 *
 * @param Error err
 *   The error why it crashes
 *
 * @return null null
 *   No return, the program has exited after this function has been completed ;)
 */
process.on('uncaughtException', function onUncaughtException(err) {
    log('An uncaught exception has occured!', 4);
    log('The stacktrace:', 4);
    log(err.stack, 4);
    process.exit(1);
});

/**
 * Finished exiting with the exiting code
 *
 * @param int code
 *   the exit code
 *
 * @return null null
 *   Well, it is not for noting process.on('exit')....
 */
process.on('exit', function onExit(code) {
    if(config.debug) {
        if(code === 0) {
            log('Exiting NOW with the code: ' + code);
        } else {
            log('Exiting NOW with the code: ' + code, 3);
        }
    }
});

/**
 * The successor of console.log, with added time, color and error levels
 *
 * @param string text
 *   the error to display
 *
 * @param int level
 *   The level of the error:
 *    0: info
 *    1: debug
 *    2: warn
 *    3: error
 *    4: severe
 *
 * @return boolean exist
 *   True if event did exist, false otherwise
 */
function log(text, level) {
    if(level == 4) {
        console.error(colors.error(time() + " [SEVERE] " + text));
    } else if(level == 3) {
        console.error(colors.error(time() + " [ERROR] " + text));
    } else if(level == 2) {
        console.warn(colors.warn(time() + " [WARN] " + text));
    } else if(level == 1) {
        if(config.debug) {
            console.log(colors.debug(time() + " [DEBUG] " + text));
        }
    } else {
        console.info(time() + " [INFO] " + text);
    }
    return true;
}
exports.log = log;

/**
 * returns a time in hour:minute:second format
 *
 * @return string time
 *   the time
 */
function time() {
    return moment().format("HH:mm:ss");
}
exports.time = time;