import ReactDOM from "react-dom";
import { Header, MessageList } from './components';
import './global.css';

ReactDOM.render(
    <div>
        <Header />
        <MessageList />
    </div>,
    document.getElementById('root')
);
