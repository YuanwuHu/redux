import Container from './components/container';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider>
        <Container />
    </Provider>
  );
}

export default App;
