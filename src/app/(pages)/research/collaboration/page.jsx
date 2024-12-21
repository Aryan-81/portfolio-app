
import Header from '@/components/Header'
import CollabCard from '@/components/CollabCard';
import data from '/public/data/collaborationData'

const bkHeaderimg = '/assets/collab/colab.webp';

function About() {
    return (
        <>
            <Header title='Collaboration' backgroundImage={bkHeaderimg} />
            <br />
            <div style={{width:'80%', margin:"100px auto 200px auto",display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "16px" }}>
                {data.map((item, index) => (
                    <CollabCard key={index} imgLink={item.imgLink} name={item.name} />
                ))}
            </div>
        </>
    );
}

export default About;
