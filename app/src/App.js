import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Quizzes from './pages/Quizzes';
import store from './redux/store';
import { routes } from './routes/routes';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path={routes.login} element={<><Login /></>} />
          <Route path={routes.quizzes} element={<><Quizzes /></>} />
          <Route path="/quiz/:id" element={<><Quiz /></>} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
