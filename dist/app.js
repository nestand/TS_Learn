"use strict";
//make the form visible
class DataInput {
    constructor() {
        //  ! in the end to remove "null" error
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedData = document.importNode(this.templateElement.content, true);
        this.element = importedData.firstElementChild;
        // css style improvement
        this.element.id = 'user-input';
        this.configure();
        this.attach();
        //titleInput element goes here
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
    //adding an event listener
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    //fixing Expected 2-3 arguments, but got 1.ts(2554) lib.dom.d.ts(6627, 68): An argument for 'listener' was not provided with a new method to bind it.
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }
}
//test 
const firstInput = new DataInput;
//# sourceMappingURL=app.js.map