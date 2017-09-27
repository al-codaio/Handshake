import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
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
        <CommentBox
            url='http://localhost:3001/api/comments'
            pollInterval={2000} />
    </div>,
  document.getElementById('root')
);
