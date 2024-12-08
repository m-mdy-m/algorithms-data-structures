import * as rl from "readline/promises";
import { stdin, stdout } from "process";
import { Pos, SyntaxTree, Token } from "./Process";
class Cli {
  interface: rl.Interface;
  constructor() {
    this.interface = rl.createInterface({ input: stdin, output: stdout });
    this.prompt();
  }
  async prompt(): Promise<void> {
    const answer = await this.interface.question("Sentence: ");
    const token = new Token(answer).getTokens();
    const posTag = new Pos(token).tagTokens();
    const syntaxTree = new SyntaxTree(token, posTag).generate();
    console.log("Tokens", token);
    console.log("POS Tags", posTag);
    console.log("Syntax Tree", syntaxTree);
    this.interface.close();
  }
}
new Cli();
