export default function Section({ className, bg, sectionId, children }) {
  return (
    <section
      className={className}
      id={sectionId}
      // style={{ background: `url(${bg})` }}
    >
      {children}
    </section>
  );
}
