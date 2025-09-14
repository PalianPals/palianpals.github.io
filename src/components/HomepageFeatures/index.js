import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import homeJoin from '@site/static/img/home_join.png';
import homeEvent from '@site/static/img/home_event.png';
import homeGuides from '@site/static/img/home_guides.png';

const FeatureList = [
  {
    title: 'Join the Community',
    Img: homeJoin,
    description: (
      <>
        Connect with fellow Palia players, join discussions, 
        and make new friends in our welcoming community.
      </>
    ),
  },
  {
    title: 'Event Guides',
    Img: homeEvent,
    description: (
      <>
        Stay updated with upcoming events, learn how to participate, 
        and find tips to make the most of every in-game celebration.
      </>
    ),
  },
  {
    title: 'Game Tips & Tutorials',
    Img: homeGuides,
    description: (
      <>
        Discover guides, tutorials, and helpful advice about Palia. 
        From gameplay mechanics to crafting and exploration, we’ve got you covered.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
