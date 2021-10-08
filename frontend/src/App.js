import './App.css';
import Message from './Message';

const message = 'Это сообщение передано из компонента App в компонент Message с помощью "props". React Developer Tools установил.'


function App(props) {
  return (
    <div className="App">
        <h1>Lesson-1</h1>
        <Message text={message} />
    </div>
  );
}

export default App;
