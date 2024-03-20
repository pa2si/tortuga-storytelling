import { motion } from 'framer-motion';

const Imprint = ({ fetchedData3 }) => {
  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const { title } = fetchedData3;

  return (
    <motion.div
      className="text-black text-center font-text"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="m-4 text-4xl">{title}</h2>

      <h3 className="m-2 text-xl">Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
      <p className="text-gray-800 mt-2 mb-4">
        Johanna Wollin
        <br />
        Prinzessinnenstr. 32
        <br />
        10969 Berlin
      </p>

      <h3 className="m-2 text-xl">Kontakt</h3>
      <p className="text-gray-800 mt-2 mb-4">
        Telefon: +49 1573 698 4762
        <br />
        Telefax: +49 (0) 123 44 55 99
        <br />
        E-Mail: tortuga.storytelling@posteo.de
      </p>

      <h3 className="m-2 text-xl">Umsatzsteuer-ID</h3>
      <p className="text-gray-800 mt-2 mb-4">
        Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
        Umsatzsteuergesetz:
        <br />
        DE999999999
      </p>

      <h3 className="m-2 text-xl">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h3>
      <p className="text-gray-800 mt-2 mb-4">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p className="text-gray-800 mt-2 mb-4">
        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
      </p>
    </motion.div>
  );
};
export default Imprint;
