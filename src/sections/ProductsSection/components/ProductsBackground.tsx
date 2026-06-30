export const ProductsBackground = () => {
  return (
    <div className="sticky text-white box-border caret-transparent h-[1000px] min-h-[auto] min-w-[auto] outline-[3px] w-screen z-[-1] overflow-hidden top-0">
      <video
        autoplay=""
        loop=""
        muted=""
        playsInline=""
        className="absolute bg-[url('https://cdn.prod.website-files.com/678e7b4c65f5a9cc36298bd8%2F67b4dcb690b2a79182e2c3cb_Home_product_bg-poster-00001.jpg')] bg-cover box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full z-[-100] bg-center m-auto -inset-full"
      >
        <source
          src="https://cdn.prod.website-files.com/678e7b4c65f5a9cc36298bd8/67b4dcb690b2a79182e2c3cb_Home_product_bg-transcode.mp4"
          className="text-black box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
        />
        <source
          src="https://cdn.prod.website-files.com/678e7b4c65f5a9cc36298bd8/67b4dcb690b2a79182e2c3cb_Home_product_bg-transcode.webm"
          className="text-black box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
        />
      </video>
    </div>
  );
};
