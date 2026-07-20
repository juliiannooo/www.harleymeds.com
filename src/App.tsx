import { SkipLink } from "@/components/navigation/SkipLink";
import { PageShell } from "@/components/layout/PageShell";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-[url('https://d2o9p5vky89u4e.cloudfront.net/MGFjMmZkODA4MmFmLm8zbi5pbw%3D%3D/l9bkxtucizywp9dbc45e7z0gb/b3VyYXJpbmcuY29t/img.gif')] box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-akkuratll">
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <SkipLink />
          <PageShell />
        </div>
      </div>
      <div className="absolute box-border caret-transparent block outline-[3px]"></div>
    </body>
  );
};
