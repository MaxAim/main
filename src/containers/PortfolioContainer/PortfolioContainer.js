import "./PortfolioContainer.css";
import PortfolioItems from "../../components/PortfolioItems/PortfolioItems";
import GaijinReact from "../../img/gaijin-react.png";
import Pokemon from "../../img/pokemon.png";
import Pasap from "../../img/pasap.png";
import GaijinJS from "../../img/gaijin-js.png";
import Cosechando from "../../img/ca.png";
import GitHub from "../../img/github.png";

const PortfolioContainer = () => {
    return(
        <div className="portfolioContainer">
            <PortfolioItems link={"https://maxaim.github.io/tienda-gaijin-react/"} background={GaijinReact} name={"Gaijin Store React"}/>
            <PortfolioItems link={"https://maxaim.github.io/favourite-pokemon/"} background={Pokemon} name={"Your Favourite Pokemon"}/>
            <PortfolioItems link={"https://maxaim.github.io/pasap-digital/"} background={Pasap} name={"Pasaporte Sanitario"}/>
            <PortfolioItems link={"https://maxaim.github.io/tienda-gaijin-JS/"} background={GaijinJS} name={"Gaijin Store JS"}/>
            <PortfolioItems link={"https://maxaim.github.io/CosechandoHabitos/"} background={Cosechando} name={"Cosechando Habitos"}/>
            <PortfolioItems link={"https://github.com/MaxAim/"} background={GitHub} name={"My Github"}/>
        </div>
    )
}

export default PortfolioContainer