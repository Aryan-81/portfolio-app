import styles from './Container.module.css'
import LinkIcon from '@/components/LinkIcon'
import Datas from '@/data/publicationData.json'

function Container() {
    return (
        <section className={styles['container']}>
            <h1>SCIENTIFIC PUBLICATIONS</h1>
            <ul>
                {Datas.scientific_publications.map((data, index) => (
                    <li key={index}>{data.publication}<a href={data.link}target="_blank" rel="noopener noreferrer"><LinkIcon/></a></li>
                ))}
            </ul>
            <h1>CONFERENCE AND WORKSHOPS</h1>
            <ul>
                {Datas.conference_and_workshops.map((data, index) => (
                    <li key={index}>{data.event}</li>
                ))}
            </ul>
        </section>
    )
}
export default Container