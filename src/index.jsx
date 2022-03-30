import { render } from 'react-dom';
import { App } from './App'; //Não preciso passar a extensão do arquivo pois o webpack já entende apartir da configuração que passamos.

render(<App />, document.getElementById('root'))