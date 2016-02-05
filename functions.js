import vars from './variables';
import {pascalcase} from 'stringcase';

export default function scale(opts) {
  var along = opts.along || vars.along;
  var mid = opts.mid || vars.mid;
  var range = opts.range || vars.range;
  var round = opts.round || vars.round;
  var scale = opts.scale || vars.scale;

  return toArray(range).map((_, i) => {
    if (i === mid - 1) return roundFn(along);
    if (i < mid) return roundFn(div(along, scale, mid - i - 1));
    return roundFn(mult(along, scale, i - mid + 1))
  }).reverse();

  function roundFn(n) {
    return round ? (Math.round(n * round) / round) : n;
  }
}

export function toArray(range) {
  return (range || '').split(' ').filter(x => x);
}

export function toHash(list) {
  if (typeof list === 'string') list = list.split(' ');
  return list.reduce((a, n) => { a[n] = true; return a; }, {});
}

export function lookup(root, props) {
  root = root || {};
  props = props || {};
  return Object.keys(vars).reduce((acc, n) => {
    acc[n] = props[n] || root[`typography${pascalcase(n)}`] || vars[n];
    return acc;
  }, {});
}

export function coerce(val) {
  if (val === 'false' || val === 0 || val === '0') val = false;
  else if (val === 'true' || val === 1 || val === '1') val = true;
  return val;
}

function div(num, by, times) {
  return times ? div(num / by, by, --times) : num;
}

function mult(num, by, times) {
  return times ? mult(num * by, by, --times) : num;
}
