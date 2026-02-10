import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Globally ignore benign ResizeObserver loop errors that appear on rapid resizes
// These originate from browser ResizeObserver internals and do not affect app logic.
// Use capture phase and preventDefault so React's error overlay doesn't surface it.
function isResizeObserverErrorMessage(msg) {
  return typeof msg === 'string' && (msg.includes('ResizeObserver loop completed') || msg.includes('ResizeObserver loop limit exceeded'));
}

window.addEventListener('error', (event) => {
  try {
    const msg = (event && event.message) || (event && event.error && event.error.message) || '';
    if (isResizeObserverErrorMessage(msg)) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      return;
    }
  } catch (err) {
    // swallow unexpected errors in handler
  }
}, true);

// Also handle unhandled promise rejections that carry the same message
window.addEventListener('unhandledrejection', (event) => {
  try {
    const reason = event && event.reason;
    const msg = typeof reason === 'string' ? reason : (reason && reason.message) || '';
    if (isResizeObserverErrorMessage(msg)) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      return;
    }
  } catch (err) {
    // ignore
  }
}, true);

// Best-effort: filter console.error messages to reduce noise in DevTools
try {
  const _consoleError = console.error.bind(console);
  console.error = (...args) => {
    try {
      if (!args || args.length === 0) return;
      const first = args[0];
      const text = typeof first === 'string' ? first : (first && first.message) || '';
      if (isResizeObserverErrorMessage(text)) return;
    } catch (inner) {
      // fall through
    }
    _consoleError(...args);
  };
} catch (e) {
  // ignore if console modification not allowed
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
