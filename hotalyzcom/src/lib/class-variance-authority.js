// Minimal cva implementation for badge.jsx
export function cva(base, options = {}) {
  return ({ variant } = {}) => {
    const v = (variant && options.variants && options.variants.variant && options.variants.variant[variant]) || "";
    return [base, v].filter(Boolean).join(" ");
  };
}
