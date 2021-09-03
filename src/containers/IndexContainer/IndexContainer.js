import { useContext } from "react";
import "./IndexContainer.css"
import GlobalContext from "../../context/GlobalContext";

function IndexContainer() {
    const { theme } = useContext(GlobalContext);
    return (
        <main className={"Main-" + theme}></main>
    );
  }
  
  export default IndexContainer;