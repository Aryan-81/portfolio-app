import styles from './Details.module.css';
import data from '/public/data/aboutData.json';

function Details() {
  return (
    <div className={styles['details']}>
      {data.sections.map((section, index) => (
        <div key={index} className={styles['container']}>
          <h2>{section.title}</h2>
          {section.subsections ? (
            section.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                <h3>{subsection.title}</h3>
                <ul>
                  {subsection.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ul>
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Details;
