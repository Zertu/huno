"use strict";
var node_1 = require("./node");
var Avltree = (function () {
    function Avltree(customCompare) {
        this._root = null;
        this._size = 0;
        this._compare = customCompare;
    }
    Avltree.prototype._compare = function (a, b) {
        return a - b;
    };
    Avltree.prototype.insert = function (key, value) {
        this._root = this._insert(key, value, this._root);
        this._size++;
    };
    Avltree.prototype._insert = function (key, value, root) {
        // 没有根节点则创建一个
        if (root === null) {
            return new node_1.node(key, value);
        }
        // 与根节点比大小，判断往哪里插入
        if (this._compare(key, root.key) < 0) {
            // 小于根节点，插入左边
            root.left = this._insert(key, value, root.left);
        }
        else if (this._compare(key, root.key) > 0) {
            root.right = this._insert(key, value, root.right);
        }
        else {
            // 重复插入，从二叉树中删除
            this._size--;
            return root;
        }
    };
    Avltree.prototype.delete = function (key) {
        this._root = this._delete(key, this._root);
        this._size--;
    };
    Avltree.prototype._delete = function (key, root) {
        if (root === null) {
            this._size++;
            return root;
        }
        else if (this._compare(key, root.key) < 0) {
            root.left = this._delete(key, root.left);
        }
        else if (this._compare(key, root.key) > 0) {
            root.right = this._delete(key, root.right);
        }
        else {
            // 要删除根节点的情况
            if (!root.left && !root.right) {
                root = null;
            }
            else if (!root.left && root.right) {
                root = root.right;
            }
            else if (root.left && !root.right) {
                root = root.left;
            }
            else {
                var minnode = minValueNode(root.right);
                root.key = minnode.key;
                root.right = this._delete(minnode.key, root.right);
            }
        }
    };
    Avltree.prototype.get = function (key) {
        if (this._root === null) {
            return null;
        }
        return this._get(key, this._root).value;
    };
    Avltree.prototype._get = function (key, root) {
        if (key === root.key) {
            return root;
        }
        if (this._compare(key, root.key) < 0) {
            if (!root.left) {
                return null;
            }
            return this._get(key, root.left);
        }
        if (!root.right) {
            return null;
        }
        return this._get(key, root.right);
    };
    Avltree.prototype.size = function () {
        return this.size;
    };
    Avltree.prototype.maxValueNode = function (root) {
        var current = root;
        while (current.right) {
            current = current.right;
        }
        return current;
    };
    return Avltree;
}());
function minValueNode(root) {
    var current = root;
    while (current.left) {
        current = current.left;
    }
    return current;
}
