const Error = ({ error }) => (
  <p
    className="font-bold flex items-center mb-4"
    style={{ color: '#e0133e', fontSize: '.8rem' }}
  >
    <svg
      className="mr-1.5"
      focusable="false"
      viewBox="0 0 24 24"
      fill="#e0133e"
      style={{
        fontSize: '1.1rem',
        width: '1em',
        height: '1em',
      }}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
    <span className="inline-block">{error}</span>
  </p>
);

export default Error;
