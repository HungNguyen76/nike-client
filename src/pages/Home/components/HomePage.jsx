import Carousel from "@comp/Carousel/Carousel";
import Category from "./Categories/Category";
import NewItem from "./NewItems/NewItem";


export default function HomePage() {
    return (
        <>
            <Carousel />
            <Category />
            <NewItem />
        </>
    )
}

