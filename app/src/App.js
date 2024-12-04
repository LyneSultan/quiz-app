import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Quizzes from './pages/Quizzes';
import store from './redux/store';
import { routes } from './routes/routes';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path={routes.quizzes} element={<><Quizzes /></>} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
