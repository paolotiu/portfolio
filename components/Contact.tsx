import React from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section className="pt-10">
      <SectionTitle
        subtitle={`I’m currently interested in freelance/part-time opportunities.However, if you have a question or just want to say hi, don’t hesitate to reach out! `}
      >
        Contact
      </SectionTitle>
      <div className="pt-4">
        <a
          href="mailto: me@paolotiu.com"
          className="pb-[2px] text-lg font-bold border-b-2 border-black dark:border-white dark:border-opacity-0  border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:transition dark:text-white"
        >
          me@paolotiu.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
