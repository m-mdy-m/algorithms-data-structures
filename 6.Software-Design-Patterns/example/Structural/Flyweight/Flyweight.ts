// flyweight
interface Font {
  getName(): string;
}
// concrete flyweights (Fonts)
class DefaultFont implements Font {
  getName(): string {
    return "Default";
  }
}
class BoldFont implements Font {
  getName(): string {
    return "Bold";
  }
}
// flyweight Factory
class FontFactory {
  private fonts: Map<string, Font> = new Map();
  public getFont(fontName: string): Font {
    if (!this.fonts.has(fontName)) {
      switch (fontName) {
        case "Default":
          this.fonts.set(fontName, new DefaultFont());
          break;
        case "Bold":
          this.fonts.set(fontName, new BoldFont());
          break;
        default:
          throw new Error("Font not supported");
      }
    }
    return this.fonts.get(fontName)!;
  }
}
// Clint

class TextFont {
  private content: string;
  public font: Font;

  constructor(content: string, fontFactory: FontFactory) {
    this.content = content;
    this.font = fontFactory.getFont("Default");
  }
  public render(): string {
    return `${this.font.getName()}: ${this.content}`;
  }
}

// usage

const factory = new FontFactory();
const text1 = new TextFont("this is some text", factory);
const text2 = new TextFont("this is bold Text", factory);
text2.font = factory.getFont("Bold");
console.log(text1.render());
console.log(text2.render());
