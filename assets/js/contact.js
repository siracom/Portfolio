const input1 = document.getElementById("text-1");
const copyButton1 = document.getElementById("copy-1");

copyButton1.addEventListener("click", (e) => copyText(e, input1));
copyButton1.addEventListener("mouseover", (e) => resetTooltip(e));

const input2 = document.getElementById("text-2");
const copyButton2 = document.getElementById("copy-2");

copyButton2.addEventListener("click", (e) => copyText(e, input2));
copyButton2.addEventListener("mouseover", (e) => resetTooltip(e));

const resetTooltip = (e) => {
  e.currentTarget.setAttribute("tooltip", "Copy to clipboard");
};

const copyText = (e, input) => {
  // window.getSelection().selectAllChildren(textElement);
  input.select(); //select input value
  document.execCommand("copy");
  e.currentTarget.setAttribute("tooltip", "Copied!");
};
