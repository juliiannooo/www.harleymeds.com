export const SkipLink = () => {
  return (
    <div className="absolute box-border caret-transparent h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
      <a
        href="#main-content"
        className="box-border caret-transparent outline-[3px] text-nowrap"
      >
        Zum Hauptbereich wechseln
      </a>
    </div>
  );
};
