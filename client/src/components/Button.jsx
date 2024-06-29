export default function Button({ ariaLabel, click, children }) {
  return (
    <button id="button" onClick={click} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
