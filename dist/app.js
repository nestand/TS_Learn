"use strict";
//make the form visible
class DataInput {
    constructor() {
        //  ! in the end to remove "null" error
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedData = document.importNode(this.templateElement.content, true);
        this.element = importedData.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
//test 
const firstInput = new DataInput;
//# sourceMappingURL=app.js.map