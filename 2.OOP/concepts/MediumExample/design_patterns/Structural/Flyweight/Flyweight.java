import java.util.HashMap; 
interface Font {
  String getName();
}
class DefaultFont implements Font {
  @Override
  public String getName() {
    return "Default";
  }
}

class BoldFont implements Font {
  @Override
  public String getName() {
    return "Bold";
  }
}

class FontFactory {
  private static final Map<String, Font> fonts = new HashMap<>(); 

  public static Font getFont(String fontName) {
    if (!fonts.containsKey(fontName)) {
      switch (fontName) {
        case "Default":
          fonts.put(fontName, new DefaultFont());
          break;
        case "Bold":
          fonts.put(fontName, new BoldFont());
          break;
        default:
          throw new IllegalArgumentException("Font not supported: " + fontName);
      }
    }
    return fonts.get(fontName);
  }
}
class Text {
  private final String content;
  private Font font;

  public Text(String content, FontFactory factory) {
    this.content = content;
    this.font = factory.getFont("Default");  
  }

  public String render() {
    return font.getName() + ": " + content;
  }
}
public class Main {
  public static void main(String[] args) {
    FontFactory factory = new FontFactory();
    
    Text text1 = new Text("This is some text", factory);
    Text text2 = new Text("This is bold text", factory);
    text2.font = factory.getFont("Bold");  
    
    System.out.println(text1.render());
    System.out.println(text2.render());
  }
}