'use strict';

const range = (n) => [...Array(n).keys()];

const zip = (A, B) => {
    if (A.length > B.length) [A, B] = [B, A];
    return A.map((a, i) => [a, B[i]]);
};

const average = (numbers) => {
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum / numbers.length;
}

const vector_distance = (point1, point2) => {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}

const round = (x, multiple_of = 1) => Math.round(x / multiple_of) * multiple_of;

const random_from = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const last_of = (arr) => {
    return arr[arr.length - 1];
}

/**
 * sort elements by some key function
 * similar to python's sort(lst, key=lambda...)
 */
const sort_by_key = (arr, key_func, options = {ascending: true}) => {
    return arr.sort(function(a, b) {
        const x = key_func(a), y = key_func(b);
        const result = (x < y) ? -1 : (x > y) ? +1 : 0;
        return options.ascending ? result : -result;
    });
}

const extract_from => (obj, keys) {
  return keys.reduce((res, key) => ((res[key] = obj[key]), res), {});
}
