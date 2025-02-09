import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // استایل‌ها
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// اگر می‌خواهید آمار و معیارها را ردیابی کنید:
reportWebVitals();
