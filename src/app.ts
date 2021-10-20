//make the form visible

class DataInput {
    // tsconfig lib changed to work with DOM Elements
    //getting the form
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    
    //input data in the form
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;


    constructor() {
        //  ! in the end to remove "null" error
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedData = document.importNode(this.templateElement.content, true);
        this.element = importedData.firstElementChild as HTMLFormElement;
        
        // css style improvement
        this.element.id = 'user-input';
        this.configure();
        this.attach();

        //titleInput element goes here
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }

    //adding an event listener
    private configure(){
        this.element.addEventListener('submit', this.submitHandler.bind(this));

    }

    //fixing Expected 2-3 arguments, but got 1.ts(2554) lib.dom.d.ts(6627, 68): An argument for 'listener' was not provided with a new method to bind it.
    private submitHandler(event: Event) {
event.preventDefault();
console.log(this.titleInputElement.value);
    }
}


//test 
const firstInput = new DataInput;