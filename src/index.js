import './index.css';
import * as serviceWorker from './serviceWorker';
import dva from 'dva';
// import createLoading from 'dva-loading';
// const history = require('history').createHashHistory

const app = dva();

const context = require.context('./models/',false,/\.js$/);
context.keys().map(key => context(key)).forEach(model => {
  app.model(model.default);
});
console.log(require('./routes/routes.js').default);
app.router(require('./routes/routes.js').default);
window.g_app = app;
app.start('#root');

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
