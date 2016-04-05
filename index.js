module.exports = typography;
exports['default'] = typography;

function typography(root, props) {
  return root.get(module.id, props, {
    scale: 1.125,
    along: 1.5,
    base: 12,
    round: 10,
    range: 'h1 h2 h3 h4 h5 h6 p small',
    margins: 'h1 h2 h3 h4 h6',
    mid: 2
  });
}
