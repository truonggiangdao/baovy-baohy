import IMG_1760 from './assets/images/IMG_1760.jpeg';
import IMG_1988 from './assets/images/IMG_1988.jpeg';
import IMG_2212 from './assets/images/IMG_2212.jpeg';
import IMG_2564 from './assets/images/IMG_2564.jpeg';
import IMG_2729 from './assets/images/IMG_2729.jpeg';
import IMG_2761 from './assets/images/IMG_2761.jpeg';
import IMG_2916 from './assets/images/IMG_2916.jpeg';
import IMG_3146 from './assets/images/IMG_3146.jpeg';
import IMG_3197 from './assets/images/IMG_3197.jpeg';
import IMG_3222 from './assets/images/IMG_3222.jpeg';
import IMG_3249 from './assets/images/IMG_3249.jpeg';
import IMG_3324 from './assets/images/IMG_3324.jpeg';
import IMG_3397 from './assets/images/IMG_3397.jpeg';
import IMG_3724 from './assets/images/IMG_3724.jpeg';
import IMG_4175 from './assets/images/IMG_4175.jpeg';
import IMG_4609 from './assets/images/IMG_4609.jpeg';
import IMG_5487 from './assets/images/IMG_5487.jpeg';
import IMG_5641 from './assets/images/IMG_5641.jpeg';
import IMG_7438 from './assets/images/IMG_7438.jpeg';
import IMG_7721 from './assets/images/IMG_7721.jpeg';
import IMG_7763 from './assets/images/IMG_7763.jpeg';
import IMG_7889 from './assets/images/IMG_7889.jpeg';

const images = [
  IMG_1760,
  IMG_1988,
  IMG_2212,
  IMG_2564,
  IMG_2729,
  IMG_2761,
  IMG_2916,
  IMG_3146,
  IMG_3197,
  IMG_3222,
  IMG_3249,
  IMG_3324,
  IMG_3397,
  IMG_3724,
  IMG_4175,
  IMG_4609,
  IMG_5487,
  IMG_5641,
  IMG_7438,
  IMG_7721,
  IMG_7763,
  IMG_7889,
];

export const getRandomImages = () => {
  const randomImages = [];
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImages.push(images[randomIndex]);
  }
  return randomImages;
};

export default images;
