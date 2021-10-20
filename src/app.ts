//make the form visible

class DataInput {
    // tsconfig lib changed to work with DOM Elements
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        //  ! in the end to remove "null" error
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedData = document.importNode(this.templateElement.content, true);
        this.element = importedData.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

//test 
const firstInput = new DataInput;