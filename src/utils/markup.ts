/**
 * Perform the following substitutions on the description:
 *   1. Replace newlines with <br />
 *   2. Replace links in the form [text](link) with appropriate hyperlinks
 */
const parseMarkup = (markup: string) => {
  return markup
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (match, p1, p2) => `<a href="#${p2}">${p1}</a>`)
    .split('\n')
    .join('<br/>');
};

export { parseMarkup };
