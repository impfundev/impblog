function MobileIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      className="opacity-75"
      width="22"
      height="22"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 3 H16 A2 2 0 0 1 18 5 V19 A2 2 0 0 1 16 21 H8 A2 2 0 0 1 6 19 V5 A2 2 0 0 1 8 3 z" />
      <path d="M11 4h2M12 9.5L11 12h2l-1 2.5" />
    </svg>
  );
}

export default MobileIcon;
