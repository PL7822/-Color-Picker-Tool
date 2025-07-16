const colorPicker = document.getElementById("colorPicker");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyHex = document.getElementById("copyHex");
const copyRgb = document.getElementById("copyRgb");

function hexToRgb(hex) {
  const r = parseInt(hex.substr(1,2), 16);
  const g = parseInt(hex.substr(3,2), 16);
  const b = parseInt(hex.substr(5,2), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

colorPicker.addEventListener("input", () => {
  const hex = colorPicker.value;
  hexValue.textContent = hex;
  rgbValue.textContent = hexToRgb(hex);
  document.body.style.backgroundColor = hex;
});

copyHex.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent);
  alert("HEX Code Copied!");
});

copyRgb.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbValue.textContent);
  alert("RGB Code Copied!");
});
