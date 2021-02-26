'use strict';

// Get default require function from the arguments to this module.

var modReq = typeof arguments === 'undefined' ? null : getFixedRequire(arguments);

/**
 * Get the require function from the supplied arguments object or a default one.
 * The arguments object must be one from the top level of a Node module.
 * Note that the default one will use a path relative to this module.
 *
 * @param {Arguments|null|undefined} [args] - Arguments object or nothing.
 * @returns {function|null} - The Node require function or null.
 */
function getFixedRequire(args) {
	// Default to the require function from this module.
	// This allows ES6 modules to use this module.
	if (!args) {
		return modReq;
	}

	// Seek out the require function in the arguments, rather than by name.
	// This avoids bundlers detecting or rewriting the require reference.
	for (var i = 0, il = args.length || 0; i < il; i++) {
		var arg = args[i];
		// If it is a function and it has a resolve method, then it is real.
		// Bundlers may supply require function, but not a resolve method.
		if (typeof arg === 'function' && typeof arg.resolve === 'function') {
			return arg;
		}
	}

	// If no Node require function is found then return null.
	// This is the expected result for any non-Node CommonJS loaders.
	return null;
}

module.exports = getFixedRequire;
