export default function SectionContainer({ classname, children }) {
  return (
    <section
      className={`w-full flex flex-col gap-6 h-screen items-center p-6 ${classname}`}
    >
      {children}
    </section>
  );
}
