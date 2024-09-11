export default function Section({ className, bg, sectionId, children }) {
  return (
    <section
      className={className}
      id={sectionId}
      // style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </section>
  );
}
