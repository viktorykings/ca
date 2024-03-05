export class Memory {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return this;
  }
}
export class MemoryClear extends Memory {
  execute() {
    this.value = 0;
    return this.value;
  }
}
export class MemoryAdd extends Memory {
  execute(val) {
    return this.value + val;
  }
}
export class MemorySubstract extends Memory {
  execute(val) {
    return val - this.value;
  }
}

export class MemoryRecall extends Memory {
  constructor(value) {
    super(value);
    this.value = value;
  }

  execute() {
    return this.value;
  }
}
