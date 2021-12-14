import "./PortfolioContainer.css";
import PortfolioItems from "../../components/PortfolioItems/PortfolioItems";
import GaijinReact from "../../img/GaijinReact.jpg";
import Pokemon from "../../img/Pokemon.jpg";
import Pasap from "../../img/Pasap.jpg";
import GaijinJS from "../../img/GaijinJS.jpg";
import Cosechando from "../../img/Cosechando.jpg";
import GitHub from "../../img/GitHub.jpg";

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