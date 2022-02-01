import { TopNav } from "../components/partials/TopNav"
import { TopSecondNav } from "../components/partials/TopSecondNav";
import './MainContainer.scss';
import { TaskContainer } from "./TaskContainer";
export const MainContainer = () =>{
    return <div className="main-container">
        <TopNav/>
        <TopSecondNav/>
        <TaskContainer/>
    </div>
}