import Header from '@/components/Header';
import Highlights from "@/components/ImgScroll/Highlights";
import Gallery from '@/components/GalleryLayout';

function Activity(){
    return(
        <>
        <Header title="Activities"/>
        <Highlights />
        <h1 style={{textAlign:'center',margin:'30px auto'}}>Gallery</h1>
        <Gallery />
        </>
    )
}

export default Activity;
