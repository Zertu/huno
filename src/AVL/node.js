"use strict";
var node = (function () {
    function node(key, value) {
        this.left = null;
        this.right = null;
        this.height = null;
        this.key = key;
        this.value = value;
    }
    return node;
}());
exports.node = node;
