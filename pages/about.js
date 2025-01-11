// pages/about.js
export async function getStaticProps() {
  return {
    props: {
      data: "<h1>Some data for the About page ini bisa pake H1</h1>",
    },
  };
}

const About = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default About;
