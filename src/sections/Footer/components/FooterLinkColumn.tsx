export type FooterLinkColumnLink = {
  href: string;
  content: React.ReactNode;
  liClassName: string;
  anchorClassName: string;
};

export type FooterLinkColumnProps = {
  containerClassName: string;
  innerClassName: string;
  title: string;
  titleClassName: string;
  linksWrapperClassName: string;
  listClassName: string;
  links: FooterLinkColumnLink[];
};

export const FooterLinkColumn = (props: FooterLinkColumnProps) => {
  return (
    <div className={` ${props.containerClassName}`}>
      <div className={` ${props.innerClassName}`}>
        <h2 className={`font-bold ${props.titleClassName}`}>{props.title}</h2>
        <div className={` ${props.linksWrapperClassName}`}>
          <ul className={` ${props.listClassName}`}>
            {props.links.map((link) => (
              <li key={link.href} className={link.liClassName}>
                <a href={link.href} className={link.anchorClassName}>
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
