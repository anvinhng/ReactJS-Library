import Gallery from "../components/Gallery"

export default function Index() {
    
    const listImage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <>
            <Gallery list={listImage}/>
        </>
    )
}
