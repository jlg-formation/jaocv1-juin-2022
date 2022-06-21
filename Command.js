export class Command {
  #callback = () => {};
  #config;

  #isPlaying = false;
  #subscription = undefined;

  constructor(config) {
    this.#config = config;
    this.applyConfig();
    this.listen();
    this.configurePlayBtn();
  }

  onUpdate(callback) {
    this.#callback = callback;
  }

  applyConfig() {
    const keys = Object.keys(this.#config);

    keys.forEach((key) => {
      const span = document.querySelector(`div.command label.${key} span`);
      span.innerHTML = Math.round(this.#config[key] * 1e2) / 1e2;

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

  configurePlayBtn() {
    const btn = document.querySelector("div.command button");
    console.log("btn: ", btn);
    btn.addEventListener("click", (event) => {
      console.log("event: ", event);
      this.#isPlaying = !this.#isPlaying;
      this.propagateIsPlayingState();
    });
  }

  propagateIsPlayingState() {
    const btn = document.querySelector("div.command button");
    btn.innerHTML = !this.#isPlaying ? "Start" : "Stop";

    if (this.#isPlaying) {
      this.#subscription = setInterval(() => {
        console.log("playing");
        this.#config.multiplicationFactor += 0.02;
        this.applyConfig();
        this.#callback(this.#config);
      }, 30);
    } else {
      if (this.#subscription !== undefined) {
        clearInterval(this.#subscription);
      }
    }
  }
}
