import "./PortfolioItems.css"
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const PortfolioItems = ({background, name, link}) => {
    const { theme } = useContext(GlobalContext);

    return(
        <a className={"portfolioItems portfolioItems-" + theme}  href={link} target="_blank" rel="noreferrer" style={{background: `url(${background}) 20vw/20vw`}}>{name}</a>
    )
}

export default PortfolioItems