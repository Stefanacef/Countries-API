const createElement = (tag, metadata) => {
  const element = document.createElement(tag);
  if (metadata.id) element.id = metadata.id;
  if (metadata.class) element.setAttribute("class", metadata.class);
  if (metadata.style) element.style = metadata.style;
  if (metadata.text) element.innerText = metadata.text;
  if (metadata.type) element.type = metadata.type;
  if (metadata.src) element.src = metadata.src;
  if (metadata.alt) element.alt = metadata.alt;
  if (metadata.placeholder) element.placeholder = metadata.placeholder;
  if (metadata.value) element.value = metadata.value;
  if (metadata.for) element.for = metadata.for;
  return element
};

export default createElement;
