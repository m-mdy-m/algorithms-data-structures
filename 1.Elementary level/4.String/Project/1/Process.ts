export class Token {
  private tokens: string[] = [];
  private numbers: RegExp = /\d/;
  private letter: RegExp = /\w/;
  private punctuation: RegExp = /[.,!?;:'"-()]/;
  private whitespace: RegExp = /\s/;
  constructor(private input: string) {
    this.process();
  }
  is(char: string): {
    isDigit: boolean;
    isLetter: boolean;
    isPunctuation: boolean;
    isWhitespace: boolean;
  } {
    return {
      isDigit: this.numbers.test(char),
      isLetter: this.letter.test(char),
      isPunctuation: this.punctuation.test(char),
      isWhitespace: this.whitespace.test(char),
    };
  }
  process(): string[] {
    let currentToken = "";
    for (let i = 0; i < this.input.length; i++) {
      const char = this.input[i];
      const nextChar = this.input[i + 1] || "";
      const { isDigit, isLetter, isPunctuation, isWhitespace } = this.is(char);
      if (char === "'" && nextChar.toLowerCase() === "t") {
        currentToken += char + nextChar;
        this.tokens.push(currentToken);
        currentToken = "";
        i++;
        continue;
      }
      if (isLetter || isDigit) {
        currentToken += char;
      } else if (isPunctuation) {
        if (currentToken) this.tokens.push(currentToken);
        this.tokens.push(char);
        currentToken = "";
      } else if (isWhitespace) {
        if (currentToken) this.tokens.push(currentToken);
        currentToken = "";
      }
    }
    if (currentToken) this.tokens.push(currentToken);
    return this.tokens;
  }
  getTokens(): string[] {
    return this.tokens;
  }
}
export class Pos {
  private lexicon: { [key: string]: string } = {
    // Determiners
    the: "Determiner",
    a: "Determiner",
    an: "Determiner",

    // Nouns
    cat: "Noun",
    mat: "Noun",
    dog: "Noun",
    car: "Noun",
    street: "Noun",
    house: "Noun",
    john: "Proper Noun",
    london: "Proper Noun",

    // Verbs
    sat: "Verb",
    runs: "Verb",
    jumped: "Verb",
    is: "Auxiliary",
    are: "Auxiliary",
    be: "Auxiliary",

    // Prepositions
    on: "Preposition",
    under: "Preposition",
    above: "Preposition",

    // Adverbs
    quickly: "Adverb",
    happily: "Adverb",

    // Adjectives
    beautiful: "Adjective",
    large: "Adjective",
    small: "Adjective",

    // Conjunctions
    and: "Conjunction",
    or: "Conjunction",
    but: "Conjunction",

    // Interjections
    wow: "Interjection",
    oh: "Interjection",
    hey: "Interjection",

    // Pronouns
    he: "Pronoun",
    she: "Pronoun",
    it: "Pronoun",
    they: "Pronoun",

    // Numerals
    one: "Numeral",
    two: "Numeral",
    three: "Numeral",

    // Punctuation
    ".": "Punctuation",
    ",": "Punctuation",
    "!": "Punctuation",
    "?": "Punctuation",

    // Informal English (street terms)
    yo: "Interjection",
    gonna: "Auxiliary",
    wanna: "Auxiliary",
    dude: "Noun",
    ain: "Auxiliary",
    sup: "Interjection",
  };
  private contractions: { [key: string]: string } = {
    "don't": "Verb",
    "isn't": "Verb",
    "won't": "Verb",
    "can't": "Verb",
    "I'm": "Pronoun",
    "you're": "Pronoun",
    "we're": "Pronoun",
    "they're": "Pronoun",
  };
  constructor(private tokens: string[]) {}
  tagTokens(): string[] {
    return this.tokens.map((token) => {
      const lowerToken = token.toLowerCase();

      // Check the lexicon for a known tag
      if (this.lexicon[lowerToken]) {
        return this.lexicon[lowerToken];
      }

      if (this.contractions[lowerToken]) {
        return this.contractions[lowerToken];
      }
      // Apply heuristic rules for unknown tokens
      if (token.endsWith("ly")) {
        return "Adverb";
      }
      if (token.endsWith("ing")) {
        return "Verb";
      }
      if (/^\d+$/.test(token)) {
        return "Numeral";
      }
      if (token[0] === token[0].toUpperCase() && token.length > 1) {
        return "Proper Noun";
      }
      if (/^[A-Za-z]+$/.test(token)) {
        // Check common verb patterns
        if (["go", "run", "jump", "sit", "stand"].includes(lowerToken)) {
          return "Verb";
        }
        return "Noun";
      }
      return "Unknown";
    });
  }
}
export class SyntaxTree {
  constructor(private tokens: string[], private posTags: string[]) {
    if (tokens.length !== posTags.length) {
      throw new Error("Tokens and POS tags arrays must have the same length.");
    }
  }
  generate(): string {
    const nodes = this.buildTree();
    // console.log("nodes->", nodes);
    // console.log("JSON->", JSON.stringify(nodes, null, 2));
    return nodes.map((node: string) => this.formatTree(node, 0)).join("\n");
  }
  private buildTree(): any {
    let index = 0;

    // Parse entire sentence(s)
    const parseSentence = (): any => {
      const children = [];
      while (index < this.tokens.length) {
        const tag = this.posTags[index];

        if (tag === "Punctuation" && this.tokens[index] === ".") {
          index++; // End sentence on period
          break;
        } else if (tag === "Determiner") {
          children.push(parseNounPhrase());
        } else if (tag === "Verb") {
          children.push(parseVerbPhrase());
        } else {
          index++;
        }
      }
      return { type: "Sentence", children };
    };

    const parseNounPhrase = (): any => {
      const children = [];
      if (this.posTags[index] === "Determiner") {
        children.push({ type: "Det", token: this.tokens[index++] });
      }
      if (this.posTags[index] === "Noun") {
        children.push({ type: "Noun", token: this.tokens[index++] });
      }
      return { type: "NP", children };
    };

    const parseVerbPhrase = (): any => {
      const children = [];
      if (this.posTags[index] === "Verb") {
        children.push({ type: "Verb", token: this.tokens[index++] });
      }
      if (this.posTags[index] === "Preposition") {
        children.push(parsePrepositionalPhrase());
      }
      return { type: "VP", children };
    };

    const parsePrepositionalPhrase = (): any => {
      const children = [];
      if (this.posTags[index] === "Preposition") {
        children.push({ type: "Prep", token: this.tokens[index++] });
      }
      children.push(parseNounPhrase());
      return { type: "PP", children };
    };

    // Parse multiple sentences if needed
    const root = [];
    while (index < this.tokens.length) {
      root.push(parseSentence());
    }
    return root;
  }

  private formatTree(node: any, indent = 0): string {
    if (!node || typeof node !== "object") {
      throw new Error("Invalid node encountered during formatting.");
    }

    const spaces = "  ".repeat(indent);

    // Handle nodes with children
    if (node.children && Array.isArray(node.children)) {
      const childOutput = node.children
        .map((child: any) => this.formatTree(child, indent + 1))
        .join("\n");
      return `${spaces}(${node.type}\n${childOutput}\n${spaces})`;
    }

    // Handle leaf nodes (e.g., terminal tokens)
    if (node.token) {
      return `${spaces}(${node.type} ${node.token})`;
    }

    throw new Error(`Node is malformed: ${JSON.stringify(node)}`);
  }
}
