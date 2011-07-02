/*
 *	This file contains any top level miscellaneous functions that
 *	a large amount of the program will be using.
 *
 *	Author: Douglas Schneider
 */

/*
 *	This function stops the program and any listeners and then stops the script.
 *	Any useful information about the reason that the program needs to die should be 
 *	printed before this is called as die does not print any valuable information about 
 *	the error.
 *	
 *	Credit:
 *
 *	http://kevin.vanzonneveld.net
 *	original by: Brett Zamir (http://brettz9.blogspot.com)
 *	bugfixed by: Hyam Singer (http://www.impact-computing.com/)
 *	improved by: Philip Peterson
 *	bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
 *	modified by: Douglas Schneider
 *		note 1: Should be considered expirimental. Please comment on this function.
 *		example 1: die();
 *		returns 1: null
 */
function die() {
    
    var i;

	console.error("Script dying!");

    window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

    var handlers = [
        'copy', 'cut', 'paste',
        'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
        'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
        'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
    ];

    function stopPropagation (e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }
    for (i=0; i < handlers.length; i++) {
        window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
    }

    if (window.stop) {
        window.stop();
    }

    throw '';
}
