import { Button } from '@material-ui/core';
import ResponsiveDialog from './components/responsiveDialog';
import ButtonAppBar from './components/appHeader';
import './App.css';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <ResponsiveDialog />
      <Button color="primary">Primary</Button>
      
    </div>
  );
}

export default App;
