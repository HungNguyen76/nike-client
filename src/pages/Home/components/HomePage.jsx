import Carousel from "@comp/Carousel/Carousel";
import Category from "@/pages/Home/components/Categories/Category";
import NewItem from "@/pages/Home/components/NewItems/NewItem";


export default function Home() {
    return (
        <>
            <Carousel />
            <Category />
            <NewItem />
        </>
    )
}
