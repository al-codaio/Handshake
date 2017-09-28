import React from 'react';
import ReactDOM from 'react-dom';
import AgencyBox from './AgencyBox';
import Dashboard from './Dashboard';
import Header from './Header';

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <div>
        <Header />
        <Dashboard />
        <AgencyBox
            url='http://localhost:3001/api/agencies'
            pollInterval={2000} />
    </div>,
  document.getElementById('root')
);
