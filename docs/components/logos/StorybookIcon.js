import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ children, ...rest }) =>
  <svg version="1.1" viewBox="0 0 438 576" {...rest}>
    <desc>{children}</desc>
    <polygon fill="#B57EE5" points="52 536 28 44 10 44 28 536" />
    <path
      d="M334.866024,22.795284 L330,88 L358.364,66.62 L382,88 L382,19.4285714 L430,16 L430,554 L62,536 L38,44 L334.866024,22.795284 Z M267.28,226.56 L344.56,224.64 C346.48,149.76 307.6,112.8 239.92,112.8 C172.24,112.8 134.32,151.2 134.32,208.8 C134.32,309.12 263.92,311.04 263.92,365.76 C263.92,381.12 256.72,390.24 240.88,390.24 C220.24,390.24 212.08,376.8 213.04,339.36 L131.92,339.36 C125.68,432 179.92,453.12 241.84,453.12 C301.84,453.12 348.88,425.28 348.88,364.8 C348.88,257.28 217.36,260.16 217.36,206.88 C217.36,185.28 232.72,182.4 241.84,182.4 C251.44,182.4 268.72,186.24 267.28,226.56 Z"
      fill="#F1618C"
    />
    <polygon fill="#FFFFFF" points="330 88 335 21 382 17 382 88 358.364 66.62" />
    <path
      d="M267.28,226.56 L344.56,224.64 C346.48,149.76 307.6,112.8 239.92,112.8 C172.24,112.8 134.32,151.2 134.32,208.8 C134.32,309.12 263.92,311.04 263.92,365.76 C263.92,381.12 256.72,390.24 240.88,390.24 C220.24,390.24 212.08,376.8 213.04,339.36 L131.92,339.36 C125.68,432 179.92,453.12 241.84,453.12 C301.84,453.12 348.88,425.28 348.88,364.8 C348.88,257.28 217.36,260.16 217.36,206.88 C217.36,185.28 232.72,182.4 241.84,182.4 C251.44,182.4 268.72,186.24 267.28,226.56 Z"
      fill="#FFFFFF"
    />
  </svg>;

Logo.propTypes = {
  children: PropTypes.string,
};
Logo.defaultProps = {
  children: 'Storybook',
};

export { Logo as default };
