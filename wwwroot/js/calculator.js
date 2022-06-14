class calculator
{
    //Properties
    buttonsContainer;
    container;
    display;

    //Private methods
    #bindEventListeners()
    {
        const buttons = this.buttonsContainer.querySelectorAll('.calculator__button');

        buttons.forEach(button =>
        {
            button.addEventListener('click', this.buttonClicked);
        });
    }

    #getElements()
    {
        this.container = document.querySelector('.calculator__container');
        this.buttonsContainer = this.container.querySelector('.calculator__buttons');
        this.display = this.container.querySelector('.calcualtor__display');
    }

    constructor()
    {
        this.#getElements();
        this.#bindEventListeners();
    }

    //Event listeners
    buttonClicked(e)
    {
        const button = e.target;

        console.log(button);
    }
}

export default calculator;