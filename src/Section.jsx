export default function Section({ className, sectionId, children }) {
  return (
    <section className="fade-in-section" id={sectionId}>
      {children}
    </section>
  );
}
