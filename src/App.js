import _ from 'lodash'
import './app.css'
import logo from './logo.png'


const App = () => {
  return `
  <div class="container">
  <img src="${logo}" alt="build icon" height="150px" width="150px" />
    <h1> Welcome </h1>
    <h2> Build apps with plain JS but with modern tooling  </h2>
</div>
    `
}

export default App