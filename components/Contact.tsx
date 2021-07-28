import React from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section className="pt-10">
      <SectionTitle subtitle="I’m currently interested in freelance/part-time opportunities. However, if you have a question or just want to say hi, don’t hesitate to reach out! ">
        Contact
      </SectionTitle>
      <div className="pt-4">
        <a
          href="mailto: me@paolotiu.com"
          className="text-lg font-bold transition hover:underline"
        >
          me@paolotiu.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
