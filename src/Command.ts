import { CommandConfig } from "./interfaces/CommandConfig";
import { querySelector } from "./utils";

type CmdCallback = (config: CommandConfig) => void;

export class Command {
  #callback: CmdCallback = () => {};

  #config: CommandConfig;

  set config(cfg) {
    this.#config = cfg;
    this.applyConfig();
    this.#callback(this.#config);
  }

  get config() {
    return this.#config;
  }

  #isPlaying = false;
  #subscription: NodeJS.Timer | undefined = undefined;

  constructor(config: CommandConfig) {
    this.#config = config;
    this.config = config;
    this.listen();
    this.configurePlayBtn();
  }

  onUpdate(callback: CmdCallback) {
    this.#callback = callback;
  }

  applyConfig() {
    const keys = Object.keys(this.config) as (keyof CommandConfig)[];

    keys.forEach((key) => {
      const span = querySelector(`div.command label.${key} span`);
      span.innerHTML = "" + Math.round(this.config[key] * 1e2) / 1e2;

      const input = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      input.value = "" + this.config[key];
    });
  }

  listen() {
    const keys = Object.keys(this.config);

    keys.forEach((key) => {
      const input = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      input.addEventListener("input", (event) => {
        const value = +input.value;
        this.config = {
          ...this.config,
          [key]: value,
        };
      });
    });
  }

  configurePlayBtn() {
    const btn = querySelector("div.command button");
    console.log("btn: ", btn);
    btn.addEventListener("click", (event) => {
      console.log("event: ", event);
      this.#isPlaying = !this.#isPlaying;
      this.propagateIsPlayingState();
    });
  }

  propagateIsPlayingState() {
    const btn = querySelector("div.command button");
    btn.innerHTML = !this.#isPlaying ? "Start" : "Stop";

    if (this.#isPlaying) {
      this.#subscription = setInterval(() => {
        console.log("playing");
        this.config = {
          ...this.config,
          multiplicationFactor: this.config.multiplicationFactor + 0.02,
        };
      }, 30);
      return;
    }
    if (this.#subscription !== undefined) {
      clearInterval(this.#subscription);
    }
  }
}
