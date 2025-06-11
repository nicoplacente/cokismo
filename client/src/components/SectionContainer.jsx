export default function SectionContainer({ classname, children }) {
  return (
    <section
      className={`section-height w-full flex flex-col gap-6 justify-center items-center p-6 ${classname}`}
    >
      {children}
    </section>
  );
}
