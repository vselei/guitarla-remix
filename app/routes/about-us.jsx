import aboutUsImg from '../../public/img/about-us.jpg';

import styles from '~/styles/about-us.css';

export const meta = () => ({
  title: 'GuitaLA Remix | Sobre Nós',
  description: 'Venda de guitarras e blog de música'
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  },
  {
    rel: 'preload',
    href: aboutUsImg,
    as: 'image'
  }
];

const AboutUs = () => (
  <main className="container about-us">
    <h2 className="heading">Sobre Nós</h2>

    <div className="content">
      <img src={aboutUsImg} alt="um violão marrom" />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          suscipit fringilla mollis. Nam id ullamcorper lacus, non dignissim
          libero. Morbi rutrum purus sit amet sem commodo rutrum. Vivamus eu
          neque eleifend, sagittis dolor ac, varius ipsum. Vivamus ut mi leo.
          Curabitur vulputate felis a quam feugiat ultricies. Donec eu
          condimentum justo. Mauris elementum vestibulum lacus, eu pellentesque
          nunc porta ornare. Integer velit mauris, euismod a est a, sollicitudin
          vulputate ante.
        </p>

        <p>
          Donec bibendum tellus enim, sit amet consectetur lorem mattis non.
          Mauris tempor orci vel turpis pulvinar fringilla. Pellentesque in
          tincidunt ipsum, ac faucibus nulla. Nam rhoncus dolor nisl, eu gravida
          justo ornare vitae. Fusce dignissim orci sed luctus aliquet. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Nullam tristique at nibh vitae tincidunt. Sed
          elementum turpis justo, ac fermentum nisi ultrices quis.
        </p>
      </div>
    </div>
  </main>
);

export default AboutUs;
