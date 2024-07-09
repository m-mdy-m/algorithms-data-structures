function Font() {
  this.getName = function () {
    throw new Error("getName not implemented");
  };
}
function DefaultFont() {
  Font.call(this); // Inherit from the base Font function
  this.getName = function () {
    return "Default";
  };
}

function BoldFont() {
  Font.call(this); // Inherit from the base Font function
  this.getName = function () {
    return "Bold";
  };
}
const fontFactory = (function () {
  const fonts = {};

  return {
    getFont: function (fontName) {
      if (!fonts[fontName]) {
        switch (fontName) {
          case "Default":
            fonts[fontName] = new DefaultFont();
            break;
          case "Bold":
            fonts[fontName] = new BoldFont();
            break;
          default:
            throw new Error("Font not supported:", fontName);
        }
      }
      return fonts[fontName];
    },
  };
})();
function Text(content, fontFactory) {
  this.content = content;
  this.font = fontFactory.getFont("Default"); // Default font
}

Text.prototype.render = function () {
  return `${this.font.getName()}: ${this.content}`;
};
const text1 = new Text("This is some text", fontFactory);
const text2 = new Text("This is bold text", fontFactory);
text2.font = fontFactory.getFont("Bold"); // Reuse existing font

console.log(text1.render()); // Output: Default: This is some text
console.log(text2.render()); // Output: Bold: This is bold text
