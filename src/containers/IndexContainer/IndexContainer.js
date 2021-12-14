import { useContext } from "react";
import "./IndexContainer.css"
import GlobalContext from "../../context/GlobalContext";
import PortfolioContainer from "../PortfolioContainer/PortfolioContainer";

function IndexContainer() {
    const { theme } = useContext(GlobalContext);
    return (
        <main className={"Main Main-" + theme}><PortfolioContainer /></main>
    );
  }
  
  export default IndexContainer;