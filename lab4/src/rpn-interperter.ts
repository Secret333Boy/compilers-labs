import rl from "node:readline";

export enum RPNOp {
  PLUS = "+",
  MINUS = "-",
  MULT = "*",
  DIV = "/",
  POW = "^",
  ASSIGN = "=",
  OUT = "OUT",
  READ_LINE = "readln",
  LESS = "<",
  LESS_EQUAL = "<=",
  MORE = ">",
  MORE_EQUAL = ">=",
  EQUALS = "==",
  NOT_EQUALS = "!=",
  STRICT_EQUALS = "===",
  JUMP = "JMP",
  JMP_FALSE = "JF",
}

export enum Bool {
  TRUE = "true",
  FALSE = "false",
}

export class RPNInterpreter {
  private stack: string[] = [];
  private varData: Record<string, any> = {};
  private i = 0;

  private actionMap: Record<string, () => Promise<void> | void | undefined> = {
    [RPNOp.PLUS]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(String(+l + +r));
    },
    [RPNOp.MINUS]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(String(+l - +r));
    },
    [RPNOp.MULT]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(String(+r * +l));
    },
    [RPNOp.DIV]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(String(+l / +r));
    },
    [RPNOp.POW]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(String((+l) ** +r));
    },
    [RPNOp.ASSIGN]: () => {
      const r = this.stack.pop();
      const l = this.stack.pop();

      if (!l) throw new Error(`Bad l-value: ${l}`);

      this.varData[l] = r;
    },
    [RPNOp.READ_LINE]: () =>
      new Promise((resolve) => {
        const reader = rl.createInterface({ input: process.stdin });

        reader.on("line", (line) => {
          this.stack.push(line);
          reader.close();
          resolve();
        });
      }),
    [RPNOp.OUT]: () => {
      let item = this.stack.pop();

      if (!item) {
        throw new Error(`Invalid OUT operand: ${item}`);
      }

      if (isNaN(+item) && !Object.values(Bool).includes(item as Bool)) {
        item = this.varData[item];
      }

      console.log(item);
    },
    [RPNOp.LESS]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(l < r ? Bool.TRUE : Bool.FALSE);
    },
    [RPNOp.LESS_EQUAL]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(l <= r ? Bool.TRUE : Bool.FALSE);
    },
    [RPNOp.MORE]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(l > r ? Bool.TRUE : Bool.FALSE);
    },
    [RPNOp.MORE_EQUAL]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r)) {
        r = this.varData[r] || 0;
      }

      if (!r || isNaN(+r)) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l)) {
        l = this.varData[l];
      }

      if (!l || isNaN(+l)) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(l >= r ? Bool.TRUE : Bool.FALSE);
    },
    [RPNOp.EQUALS]: () => {
      let r: string | boolean | undefined = this.stack.pop();
      let l: string | boolean | undefined = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r) && !Object.values(Bool).includes(r as Bool)) {
        r = this.varData[r];
      }

      if (!r || (isNaN(+r) && !Object.values(Bool).includes(r as Bool))) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l) && !Object.values(Bool).includes(l as Bool)) {
        l = this.varData[l];
      }

      if (!l || (isNaN(+l) && !Object.values(Bool).includes(l as Bool))) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      if (Object.values(Bool).includes(l as Bool)) {
        l = l === Bool.TRUE;
      }

      if (Object.values(Bool).includes(r as Bool)) {
        r = r === Bool.TRUE;
      }

      this.stack.push(l == r ? Bool.TRUE : Bool.FALSE);
    },
    [RPNOp.NOT_EQUALS]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r) && !Object.values(Bool).includes(r as Bool)) {
        r = this.varData[r];
      }

      if (!r || (isNaN(+r) && !Object.values(Bool).includes(r as Bool))) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l) && !Object.values(Bool).includes(l as Bool)) {
        l = this.varData[l];
      }

      if (!l || (isNaN(+l) && !Object.values(Bool).includes(l as Bool))) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(l !== r ? Bool.TRUE : Bool.FALSE);
    },
    [RPNOp.STRICT_EQUALS]: () => {
      let r = this.stack.pop();
      let l = this.stack.pop();

      if (!r) {
        throw new Error(`Invalid r-value: ${r}`);
      }

      if (!l) {
        throw new Error(`Invalid l-value: ${l}`);
      }

      if (isNaN(+r) && !Object.values(Bool).includes(r as Bool)) {
        r = this.varData[r];
      }

      if (!r || (isNaN(+r) && !Object.values(Bool).includes(r as Bool))) {
        throw new Error(`Failed to load r-value: ${r}`);
      }

      if (isNaN(+l) && !Object.values(Bool).includes(l as Bool)) {
        l = this.varData[l];
      }

      if (!l || (isNaN(+l) && !Object.values(Bool).includes(l as Bool))) {
        throw new Error(`Failed to load l-value: ${l}`);
      }

      this.stack.push(l === r ? Bool.TRUE : Bool.FALSE);
    },
    [RPNOp.JMP_FALSE]: () => {
      const mark = this.stack.pop();
      const condition = this.stack.pop();

      if (!Object.values(Bool).includes(condition as Bool)) {
        throw new Error(`Invalid JF condition: ${condition}`);
      }

      const toJump = condition === Bool.FALSE;

      if (toJump) {
        const nextI = this.output.indexOf(mark + ":");
        if (nextI === -1) throw new Error(`Mark not found: ${mark}`);

        this.i = nextI;
      }
    },
    [RPNOp.JUMP]: () => {
      const mark = this.stack.pop();

      const nextI = this.output.indexOf(mark + ":");
      if (nextI === -1) throw new Error(`Mark not found: ${mark}`);

      this.i = nextI;
    },
  };

  constructor(private output: string[]) {}

  public async interprete() {
    for (this.i; this.i < this.output.length; this.i++) {
      const item = this.output[this.i];

      const action = this.actionMap[item];

      if (action) {
        await action();
        continue;
      }

      if (item.endsWith(":")) continue;

      this.stack.push(item);
    }

    this.i = 0;
  }
}
