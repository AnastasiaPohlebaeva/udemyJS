class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let wrap = document.querySelector('.main-wrap'),
            element = document.createElement('div'),
            parametrs = `height: ${this.height}px; width: ${this.width}px; margin: auto;`;

        element.textContent = 'И вот я появился!';
        element.style.cssText = parametrs + "color: red !important; background-color: yellow;";

        wrap.appendChild(element);
    }

}

let someOption = new Options(200, 300, 'black', 18, 'center');

someOption.createDiv();