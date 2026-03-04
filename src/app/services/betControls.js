export function setAllInBetValue(input, cookies, renderFn) {
  if (!input) return;
  input.value = String(Math.max(0, Math.floor(cookies)));
  if (typeof renderFn === "function") {
    renderFn();
  }
}
