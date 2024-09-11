export default function Section({ className, sectionId, children }) {
  return (
    <section className={className} id={sectionId}>
      {children}
    </section>
  );
}
