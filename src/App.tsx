
import {SideBar} from "./components/SideBar/SideBar.tsx";
import {Root} from "./routes/Root.tsx";
import {AddTask} from "./components/AddTask/AddTask.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return(
        <BrowserRouter>
            <Root/>
            <SideBar/>
            <AddTask/>
        </BrowserRouter>
    )
}

export default App
