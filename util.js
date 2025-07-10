
export default function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// Default export
export default function add(a, b) {
  return a + b;
}

// Named export: constant
export const PI = 3.14159;

// Named export: function
export function subtract(a, b) {
  return a - b;
}

  