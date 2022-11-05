const parser = new DOMParser();
export const decodedString = (string) =>
  parser.parseFromString(`<!doctype html><body>${string}`, "text/html").body
    .textContent;
