const DataCollection = require('../data-collection');

class EditorDataCollection extends DataCollection {
    // You can extend this class with editor-specific methods or overrides
    constructor(model) {
        super(model);
    };
} 

module.exports = EditorDataCollection;
