export class Command {
  #callback = () => {};
  #config;

  constructor(config) {
    this.#config = config;
    this.applyConfig();
    this.listen();
  }

  onUpdate(callback) {
    this.#callback = callback;
  }

  applyConfig() {
    const keys = Object.keys(this.#config);

    keys.forEach((key) => {
      const span = document.querySelector(`div.command label.${key} span`);
      span.innerHTML = this.#config[key];

      const input = document.querySelector(`div.command label.${key} input`);
      input.value = this.#config[key];
    });
  }

  listen() {
    const keys = Object.keys(this.#config);

    keys.forEach((key) => {
      const input = document.querySelector(`div.command label.${key} input`);
      input.addEventListener("input", (event) => {
        const input = event.target;
        const value = +input.value;
        this.#config[key] = value;
        this.applyConfig();
        this.#callback(this.#config);
      });
    });
  }
}
