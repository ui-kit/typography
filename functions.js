import vars from './variables';
import {pascalcase} from 'stringcase';

export default function scale(opts) {
  var range = opts.range || vars.range;
  var calcFn = calc(opts);
  return toArray(range).map((_, i) => calcFn(i)).reverse();
}

export function calc(opts) {
  var along = opts.along || vars.along;
  var mid = opts.mid || vars.mid;
  var round = opts.round || vars.round;
  var Scale = opts.scale || vars.scale;
  var roundFn = round ? ((n) => Math.round(n * round) / round) : n => n;

  return (i) => {
    if (i === mid - 1) return roundFn(along);
    if (i < mid) return roundFn(div(along, Scale, mid - i - 1));
    return roundFn(mult(along, Scale, i - mid + 1))
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

export function partsFromRange(range, props) {
  if (typeof range === 'string') range = toArray(range);
  if (props.at) props[props.at] = true;
  var len = range.length;
  for (var i = 0; i < len; i++) {
    if (props[range[i]]) return [range[i], i, len];
  }
}

function div(num, by, times) {
  return times ? div(num / by, by, --times) : num;
}

function mult(num, by, times) {
  return times ? mult(num * by, by, --times) : num;
}
