import "./App.scss";
import { SideNav } from "./components/partials/SideNav";
import { MainContainer } from "./containers/MainContainer";

const App = () => {
return <div className="app"> 
<SideNav/>
<MainContainer/>
</div>
};

export default App;
