export class Command {
  #callback = () => {};

  constructor() {
    this.draw();
  }

  onUpdate(callback) {
    this.#callback = callback;
  }

  draw() {}
}
