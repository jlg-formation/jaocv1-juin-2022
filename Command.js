export class Command {
  #callback = () => {};
  #config;

  constructor(config) {
    this.#config = config;
    this.applyConfig();
  }

  onUpdate(callback) {
    this.#callback = callback;
  }

  applyConfig() {
    const keys = Object.keys(this.#config);
    console.log("keys: ", keys);
    keys.forEach((key) => {
      const span = document.querySelector(`div.command label.${key} span`);
      span.innerHTML = this.#config[key];
    });
  }
}
