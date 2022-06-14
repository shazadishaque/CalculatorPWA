class calculator
{
    //Properties
    calculator;
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
        this.calculator = this;
        this.container = document.querySelector('.calculator__container');
        this.buttonsContainer = this.container.querySelector('.calculator__buttons');
        this.display = this.container.querySelector('.calculator__display');
    }

    constructor()
    {
        this.#getElements();
        this.#bindEventListeners();
    }

    //Static methods
    static addOperator(operator)
    {
        const display = this.getDisplayElement();
        const operators = ['/', '*', '+', '-'];

        if (display.value == '')
        {
            return '';
        }
        else if (operators.includes(display.value[display.value.length - 1]))
        {
            display.value = `${calculator.removeLastCharacter(display.value)}${operator}`;
        }
        else
        {
            display.value = `${display.value}${operator}`;
        }
    }

    static getDisplayElement()
    {
        return document.querySelector('.calculator__display');
    }

    static canAddBrackets()
    {
        const displayValue = this.getDisplayElement().value;
        return displayValue && (displayValue[0] != '(' || displayValue[displayValue.length - 1] != ')')
    }

    static canAddDecimal()
    {
        const displayValue = this.getDisplayElement().value;

        for (let i = displayValue.length - 1; 0 < i; i--)
        {
            const char = displayValue[i];
            if (Number.isInteger(parseInt(char))) continue;
            return false;
        }

        return true;
    }

    static removeLastCharacter(source)
    {
        return source.slice(0, source.length - 1);
    }

    //Event listeners
    buttonClicked(e)
    {
        const button = e.target;
        const display = calculator.getDisplayElement();

        switch (button.id)
        {
            case 'button__0':
            case 'button__1':
            case 'button__2':
            case 'button__3':
            case 'button__4':
            case 'button__5':
            case 'button__6':
            case 'button__7':
            case 'button__8':
            case 'button__9':
                display.value += button.id.split('__')[1];
                break;
            case 'button__clear':
                display.value = '';
                break;
            case 'button__brackets':
                display.value = calculator.canAddBrackets() ? `(${display.value})` : display.value;
                break;
            case 'button__percent':
                //todo
                break;
            case 'button__divide':
                calculator.addOperator('/');
                break;
            case 'button__multiple':
                calculator.addOperator('*');
                break;
            case 'button__subtract':
                calculator.addOperator('-');
                break;
            case 'button__add':
                calculator.addOperator('+');
                break;
            case 'button__decimal':
                display.value += calculator.canAddDecimal() ? '.' : '';
                break;
            case 'button__backspace':
                display.value = calculator.removeLastCharacter(display.value);
                break;
            case 'button__equal':
                display.value = eval(display.value);
                break;
        }
    }
}

export default calculator;