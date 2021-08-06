import './App.css';
import Sidebar from './sidebar/Sidebar';
import MessageSender from './components/messageSender/MessageSender';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <MessageSender/>
    </div>
  );
}

export default App;