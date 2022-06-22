export const querySelector = <T extends Element>(
  selector: string,
  myClass?: new () => T
): T => {
  const element = document.querySelector(selector);
  if (element === null) {
    throw new Error(`querySelector: cannot find ${selector}`);
  }
  if (myClass !== undefined) {
    if (!(element instanceof myClass)) {
      throw new Error("instance not good");
    }
  }
  return element as T;
};
