import ImageText from "../components/ImageText";
import NewsLatter from "../components/NewLatter";
import TrendyCollection from "../components/TrendyCollection";

export default function SingleProduct(){
    return(
        <div>
            <ImageText />
            <TrendyCollection title={"Related Products"} />
            <NewsLatter />
        </div>
    )
}