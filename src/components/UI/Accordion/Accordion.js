import AccordionStyles from "./Accordion.module.scss";

const Accordion = ({ children }) => {
  return <section className={AccordionStyles.section}>{children}</section>;
};

const Content = ({ title = "", children, open = false }) => {
  return (
    <details open={open} className={AccordionStyles.details}>
      <summary className={AccordionStyles.summary}>{title}</summary>
      <article className={AccordionStyles.article}>{children}</article>
    </details>
  );
};

Accordion.Content = Content;

export default Accordion;
