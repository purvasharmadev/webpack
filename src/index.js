import App from "./App";
import logo from './logo.png'
const root = document.getElementById("root");
root.innerHTML = `
<img src="${logo}" alt="build icon" height="300px" width="300px" />
${App()};
`;
