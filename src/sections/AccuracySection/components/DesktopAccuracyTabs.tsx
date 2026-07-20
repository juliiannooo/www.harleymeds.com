export const DesktopAccuracyTabs = () => {
  return (
    <div className="box-border caret-transparent hidden col-end-auto col-start-auto min-h-0 min-w-0 outline-[3px] md:block md:col-end-[23] md:col-start-3 md:min-h-[715px] md:min-w-[auto]">
      <div className="box-border caret-transparent opacity-0 outline-[3px]">
        <div className="box-border caret-transparent flex flex-col outline-[3px] gap-y-10 md:gap-y-12">
          <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
            <div className="relative box-border caret-transparent outline-[3px]">
              <div
                role="tablist"
                className="relative box-border caret-transparent gap-x-8 flex justify-between outline-[3px] z-10"
              >
                <button
                  role="tab"
                  type="button"
                  className="relative appearance-none text-sm items-center bg-transparent caret-transparent flex justify-center leading-5 min-h-0 min-w-0 outline-[3px] text-center bg-[position:0px_0px] pt-3 pb-4 px-0 border-b-[3px] border-black md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto] md:pt-5 md:pb-7 md:px-12"
                >
                  Tagesbeginn
                </button>
                <button
                  role="tab"
                  type="button"
                  className="relative appearance-none text-sm items-center bg-transparent caret-transparent flex justify-center leading-5 min-h-0 min-w-0 opacity-70 outline-[3px] text-center bg-[position:0px_0px] pt-3 pb-4 px-0 border-t-black border-b-transparent border-b-[3px] border-x-black md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto] md:pt-5 md:pb-7 md:px-12"
                >
                  Bewegung
                </button>
                <button
                  role="tab"
                  type="button"
                  className="relative appearance-none text-sm items-center bg-transparent caret-transparent flex justify-center leading-5 min-h-0 min-w-0 opacity-70 outline-[3px] text-center bg-[position:0px_0px] pt-3 pb-4 px-0 border-t-black border-b-transparent border-b-[3px] border-x-black md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto] md:pt-5 md:pb-7 md:px-12"
                >
                  Wohlbefinden
                </button>
                <button
                  role="tab"
                  type="button"
                  className="relative appearance-none text-sm items-center bg-transparent caret-transparent flex justify-center leading-5 min-h-0 min-w-0 opacity-70 outline-[3px] text-center bg-[position:0px_0px] pt-3 pb-4 px-0 border-t-black border-b-transparent border-b-[3px] border-x-black md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto] md:pt-5 md:pb-7 md:px-12"
                >
                  Schlaf
                </button>
                <button
                  role="tab"
                  type="button"
                  className="relative appearance-none text-sm items-center bg-transparent caret-transparent flex justify-center leading-5 min-h-0 min-w-0 opacity-70 outline-[3px] text-center bg-[position:0px_0px] pt-3 pb-4 px-0 border-t-black border-b-transparent border-b-[3px] border-x-black md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto] md:pt-5 md:pb-7 md:px-12"
                >
                  Belastung
                </button>
              </div>
              <div
                role="presentation"
                className="absolute bg-stone-300 box-border caret-transparent h-px outline-[3px] w-full left-0 bottom-0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccuracyTabPanelTagesbeginn = () => {
  return (
    <div
      role="tabpanel"
      className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
    >
      <div className="relative box-border caret-transparent gap-x-6 flex flex-col justify-center opacity-0 outline-[3px] pt-12 pb-32 md:flex-row md:py-0">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 pb-6 md:hidden md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] outline-[3px]">
            <div className="box-border caret-transparent blur-[5px] opacity-0 outline-[3px]">
              <h4 className="text-stone-700 text-[28px] font-light box-border caret-transparent leading-[42px] outline-[3px] text-left md:text-[40px] md:leading-[60px]">
                Tagesbeginn
              </h4>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent block h-[500px] opacity-0 outline-[3px] md:hidden">
          <img
            alt="Frau trägt einen Oura Ring und streckt ihre Hände über den Kopf"
            sizes="100vw"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/124.jpg"
            className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
          />
        </div>
        <div className="relative box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] mt-14 md:block md:min-h-[auto] md:min-w-[auto]">
          <img
            alt="Frau trägt einen Oura Ring und streckt ihre Hände über den Kopf"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/107.jpg"
            className="text-transparent aspect-[auto_520_/_520] box-border max-w-full object-cover outline-[3px] w-[520px] rounded-lg"
          />
        </div>
        <div className="absolute box-border caret-transparent block flex-col max-w-[300px] min-h-0 min-w-0 outline-[3px] gap-y-6 w-[300px] left-2/4 bottom-16 md:relative md:flex md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:left-0 md:bottom-auto">
          <div className="bg-[url('https://c.animaapp.com/mrtmz843YzbOCE/assets/1.avif')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] min-h-0 min-w-0 outline-[3px] overflow-hidden rounded-lg md:grid md:min-h-[auto] md:min-w-[auto]">
            <img
              alt="Ansicht der Schlafdaten in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/51.png"
              className="text-transparent aspect-[auto_300_/_228] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full min-h-0 min-w-0 outline-[3px] w-[300px] px-4 md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_starting_your_day_readiness.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=83862f1410eb785c9b405270b7c8178f')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] min-h-0 min-w-0 outline-[3px] overflow-hidden rounded-lg md:grid md:min-h-[auto] md:min-w-[auto]">
            <img
              alt="Ansicht der Tagesformbewertung in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/113.png"
              className="text-transparent aspect-[auto_300_/_270] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full min-h-0 min-w-0 outline-[3px] w-[300px] pt-4 md:min-h-[auto] md:min-w-[auto]"
            />
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_starting_your_day_readiness.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=83862f1410eb785c9b405270b7c8178f')] bg-cover box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] opacity-0 outline-[3px] overflow-hidden rounded-lg md:hidden">
            <img
              alt="Ansicht der Tagesformbewertung in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/113.png"
              className="text-transparent aspect-[auto_300_/_277] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px] pt-4"
            />
          </div>
        </div>
        <div className="self-center box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] border border-stone-300 px-10 py-12 rounded-lg border-solid md:block md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-17.svg"
            alt="Icon"
            className="text-stone-600 box-border caret-transparent h-[9px] outline-[3px] w-[13px]"
          />
          <p className="text-stone-700 text-3xl font-thin box-border caret-transparent leading-[45px] outline-[3px] text-left mt-10 font-editorial_new">
            Oura ist wie mein Kompass, der mir den richtigen Weg zeigt.
          </p>
          <p className="text-stone-600 text-sm box-border caret-transparent leading-[21px] outline-[3px] text-left mt-4">
            Jussi L., Oura-Mitglied
          </p>
        </div>
      </div>
    </div>
  );
};

export const AccuracyTabPanelBewegung = () => {
  return (
    <div
      role="tabpanel"
      className="box-border caret-transparent hidden outline-[3px]"
    >
      <div className="relative box-border caret-transparent gap-x-6 flex flex-col justify-center opacity-0 outline-[3px] pt-12 pb-32 md:flex-row md:py-0">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 pb-6 md:hidden md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] outline-[3px]">
            <div className="box-border caret-transparent blur-[5px] opacity-0 outline-[3px]">
              <h4 className="text-stone-700 text-[28px] font-light box-border caret-transparent leading-[42px] outline-[3px] text-left md:text-[40px] md:leading-[60px]">
                Bewegung
              </h4>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent block h-[500px] opacity-0 outline-[3px] md:hidden">
          <img
            alt="Hand mit Oura Ring trägt eine Tasche"
            sizes="100vw"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/155.jpg"
            className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
          />
        </div>
        <div className="relative box-border caret-transparent hidden outline-[3px] md:block">
          <div className="box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] justify-items-end outline-[3px] md:grid">
            <img
              alt=""
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/37.jpg"
              className="text-transparent aspect-[auto_340_/_81] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[340px] my-6 rounded-lg"
            />
            <img
              alt="Ansicht der Benachrichtigung „Zeit, dir etwas die Beine zu vertreten?“ in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/45.png"
              className="text-transparent aspect-[auto_340_/_81] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[340px] my-6 rounded-lg"
            />
          </div>
          <img
            alt="Hand mit Oura Ring trägt eine Tasche"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/32.avif"
            className="text-transparent aspect-[auto_605_/_510] box-border max-w-full object-cover outline-[3px] w-[605px] rounded-lg"
          />
        </div>
        <div className="absolute box-border caret-transparent block flex-col max-w-[300px] outline-[3px] gap-y-6 w-[300px] left-2/4 bottom-16 md:relative md:flex md:max-w-none md:w-auto md:left-0 md:bottom-auto">
          <div className="bg-[url('https://ourahealth.imgix.net/blue-sky/home/take-walk-mask-2.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=d7ed2694f943aa9dd58ab9f830072332')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] overflow-hidden rounded-lg md:grid">
            <img
              alt="Ansicht der Herzfrequenz in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/117.png"
              className="text-transparent aspect-[auto_350_/_223] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[350px]"
            />
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/blue-sky/home/take-walk-mask-3.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=d2c759c3aaec8c84dbbcbadbfd779fe2')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] w-fit overflow-hidden rounded-lg md:grid">
            <img
              alt="Ansicht des Aktivitätsziels in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/55.png"
              className="text-transparent aspect-[auto_300_/_275] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px]"
            />
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/blue-sky/home/take-walk-mask-mobile.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=61a9b73cb6e6be3fee43073fa3a2ff8b')] bg-cover box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] opacity-0 outline-[3px] overflow-hidden rounded-lg md:hidden">
            <img
              alt="Ansicht des Aktivitätsziels in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/55.png"
              className="text-transparent aspect-[auto_300_/_277] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccuracyTabPanelWohlbefinden = () => {
  return (
    <div
      role="tabpanel"
      className="box-border caret-transparent hidden outline-[3px]"
    >
      <div className="relative box-border caret-transparent gap-x-6 flex flex-col justify-center opacity-0 outline-[3px] pt-12 pb-32 md:flex-row md:py-0">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 pb-6 md:hidden md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] outline-[3px]">
            <div className="box-border caret-transparent blur-[5px] opacity-0 outline-[3px]">
              <h4 className="text-stone-700 text-[28px] font-light box-border caret-transparent leading-[42px] outline-[3px] text-left md:text-[40px] md:leading-[60px]">
                Wohlbefinden
              </h4>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent block h-[500px] opacity-0 outline-[3px] md:hidden">
          <img
            alt="Mann putzt sich die Nase und trägt einen Oura Ring"
            sizes="100vw"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/153.jpg"
            className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
          />
        </div>
        <div className="relative box-border caret-transparent hidden outline-[3px] md:block">
          <img
            alt="Mann putzt sich die Nase und trägt einen Oura Ring"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/136.jpg"
            className="text-transparent aspect-[auto_450_/_500] box-border max-w-full object-cover outline-[3px] w-[450px] rounded-lg"
          />
        </div>
        <div className="absolute box-border caret-transparent block flex-col max-w-[300px] outline-[3px] gap-y-6 w-[300px] mt-0 left-2/4 bottom-16 md:relative md:flex md:max-w-none md:w-auto md:mt-14 md:left-0 md:bottom-auto">
          <div className="bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_under_the_weather_body_temp.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=73915a4c860ba012c96e387d66a6b80b')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] overflow-hidden rounded-lg md:grid">
            <img
              alt="Ansicht des Features „Symptommelder“ in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/141.png"
              className="text-transparent aspect-[auto_300_/_265] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px]"
            />
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_under_the_weather_readiness.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=1100ad3a5b5403fc362b3788bf584496')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] overflow-hidden rounded-lg md:grid">
            <img
              alt="Ansicht der Erholungsdaten in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/137.png"
              className="text-transparent aspect-[auto_300_/_252] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px] pt-4"
            />
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_under_the_weather_readiness.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=1100ad3a5b5403fc362b3788bf584496')] bg-cover box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] opacity-0 outline-[3px] overflow-hidden rounded-lg md:hidden">
            <img
              alt="Ansicht der Erholungsdaten in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/137.png"
              className="text-transparent self-center aspect-[auto_300_/_252] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px] pt-4"
            />
          </div>
        </div>
        <div className="self-start box-border caret-transparent hidden max-w-[304px] outline-[3px] border border-stone-300 mt-14 px-10 py-12 rounded-lg border-solid md:block">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-17.svg"
            alt="Icon"
            className="text-stone-600 box-border caret-transparent h-[9px] outline-[3px] w-[13px]"
          />
          <p className="text-stone-700 text-3xl font-thin box-border caret-transparent leading-[45px] outline-[3px] text-left mt-24 font-editorial_new">
            Meine Oura-Daten sind mein Weg zu wohlüberlegten Entscheidungen.
          </p>
          <p className="text-stone-600 text-sm box-border caret-transparent leading-[21px] outline-[3px] text-left mt-4">
            Linda D., Oura-Mitglied
          </p>
        </div>
      </div>
    </div>
  );
};

export const AccuracyTabPanelSchlaf = () => {
  return (
    <div
      role="tabpanel"
      className="box-border caret-transparent hidden outline-[3px]"
    >
      <div className="relative box-border caret-transparent gap-x-6 flex flex-col justify-center opacity-0 outline-[3px] pt-12 pb-32 md:flex-row md:py-0">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 pb-6 md:hidden md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] outline-[3px]">
            <div className="box-border caret-transparent blur-[5px] opacity-0 outline-[3px]">
              <h4 className="text-stone-700 text-[28px] font-light box-border caret-transparent leading-[42px] outline-[3px] text-left md:text-[40px] md:leading-[60px]">
                Schlaf
              </h4>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent block h-[500px] opacity-0 outline-[3px] md:hidden">
          <img
            alt="Frau streicht ihr Haar aus dem Gesicht"
            sizes="100vw"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/171.jpg"
            className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
          />
        </div>
        <div className="relative box-border caret-transparent hidden outline-[3px] md:block">
          <img
            alt="Frau streicht ihr Haar aus dem Gesicht"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/148.jpg"
            className="text-transparent aspect-[auto_400_/_547] box-border max-w-full object-cover outline-[3px] w-[400px] rounded-lg"
          />
        </div>
        <div className="absolute box-border caret-transparent block flex-col max-w-[300px] outline-[3px] gap-y-6 w-[300px] mt-0 left-2/4 bottom-16 md:relative md:flex md:max-w-none md:w-auto md:mt-14 md:left-0 md:bottom-auto">
          <div className="box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] md:grid">
            <img
              alt=""
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/39.jpg"
              className="text-transparent aspect-[auto_328_/_81] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[328px] ml-[15%] rounded-lg"
            />
            <img
              alt="Ansicht der Benachrichtigung „Bald ist Schlafenszeit“"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/48.png"
              className="text-transparent aspect-[auto_328_/_81] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[328px] ml-[15%] rounded-lg"
            />
          </div>
          <div className="box-border caret-transparent gap-x-6 block outline-[3px] md:flex">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="bg-[url('https://ourahealth.imgix.net/blue-sky/home/winding-down-mask-2.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=828&s=464457f11ac9a885aa92bd27cdab1d86')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] overflow-hidden rounded-lg md:grid">
                <img
                  alt="Ansicht der Karte „Bald ist Schlafenszeit“ in der Oura-App"
                  src="https://c.animaapp.com/mrtmz843YzbOCE/assets/143.png"
                  className="text-transparent self-center aspect-[auto_384_/_346] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] py-9"
                />
              </div>
              <div className="bg-[url('https://ourahealth.imgix.net/blue-sky/home/wind-down-mask-mobile.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=3c3491cda30b0a902486fadab46b0182')] bg-cover box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] opacity-0 outline-[3px] overflow-hidden rounded-lg md:hidden">
                <img
                  alt="Ansicht der Karte „Bald ist Schlafenszeit“ in der Oura-App"
                  src="https://c.animaapp.com/mrtmz843YzbOCE/assets/147.png"
                  className="text-transparent self-center aspect-[auto_300_/_270] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] py-4"
                />
              </div>
            </div>
            <div className="box-border caret-transparent hidden outline-[3px] border border-stone-300 px-10 py-12 rounded-lg border-solid md:block">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-17.svg"
                alt="Icon"
                className="text-stone-600 box-border caret-transparent h-[9px] outline-[3px] w-[13px]"
              />
              <p className="text-stone-700 text-3xl font-thin box-border caret-transparent leading-[45px] outline-[3px] text-left mt-4 font-editorial_new">
                Oura half mir,
                <br className="box-border caret-transparent outline-[3px]" />
                meinen Schlaf zu
                <br className="box-border caret-transparent outline-[3px]" />
                verbessern. Das war
                <br className="box-border caret-transparent outline-[3px]" />
                der erste Schritt
                <br className="box-border caret-transparent outline-[3px]" />
                zu mehr Gesundheit.
              </p>
              <p className="text-stone-600 text-sm box-border caret-transparent leading-[21px] outline-[3px] text-left mt-4">
                Rhonda C., Oura-Mitglied
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccuracyTabPanelBelastung = () => {
  return (
    <div
      role="tabpanel"
      className="box-border caret-transparent hidden outline-[3px]"
    >
      <div className="relative box-border caret-transparent gap-x-6 flex flex-col justify-center opacity-0 outline-[3px] pt-12 pb-32 md:flex-row md:py-0">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 pb-6 md:hidden md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] outline-[3px]">
            <div className="box-border caret-transparent blur-[5px] opacity-0 outline-[3px]">
              <h4 className="text-stone-700 text-[28px] font-light box-border caret-transparent leading-[42px] outline-[3px] text-left md:text-[40px] md:leading-[60px]">
                Belastung
              </h4>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent block h-[500px] opacity-0 outline-[3px] md:hidden">
          <img
            alt="Nahaufnahme der Hand einer Person mit einem Petal Oura Ring 4 Ceramic am Finger"
            sizes="100vw"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/176.jpg"
            className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
          />
        </div>
        <div className="relative box-border caret-transparent hidden outline-[3px] md:block">
          <img
            alt="Nahaufnahme der Hand einer Person mit einem Petal Oura Ring 4 Ceramic am Finger"
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/181.jpg"
            className="text-transparent aspect-[auto_575_/_431] box-border max-w-full object-cover outline-[3px] w-[575px] rounded-lg"
          />
        </div>
        <div className="absolute box-border caret-transparent block flex-col max-w-[300px] outline-[3px] gap-y-6 w-[300px] left-2/4 bottom-16 md:relative md:flex md:max-w-none md:w-auto md:left-0 md:bottom-auto">
          <div className="box-border caret-transparent gap-x-6 hidden outline-[3px] gap-y-6 md:flex">
            <div className="self-end bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_hosting_a_party_stress.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=e342368d9072dc85c13ec88eeb37360a')] bg-cover box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] overflow-hidden rounded-lg">
              <img
                alt="Ansicht der Daten für Stress tagsüber in der Oura-App"
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/165.png"
                className="text-transparent aspect-[auto_300_/_249] bg-[oklab(0.243533_0.0000111014_0.00000487268_/_0.3)] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px]"
              />
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <img
                alt="Nahaufnahme der Hand einer Person mit einem Petal Oura Ring 4 Ceramic am Finger"
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/188.jpg"
                className="text-transparent aspect-[auto_220_/_294] box-border max-w-full outline-[3px] w-[220px] rounded-lg"
              />
            </div>
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_hosting_a_party_heart_rate.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=750&s=8a803b2e08eaa3a7fb80edd3e92422d3')] bg-cover box-border caret-transparent hidden grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] outline-[3px] w-fit overflow-hidden rounded-lg md:grid">
            <img
              alt="Ansicht der Daten für Herzfrequenz tagsüber in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/117.png"
              className="text-transparent self-center aspect-[auto_345_/_262] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[345px]"
            />
          </div>
          <div className="bg-[url('https://ourahealth.imgix.net/jade/masks/bg_mask_hosting_a_party_heart_rate.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=750&s=8a803b2e08eaa3a7fb80edd3e92422d3')] bg-cover box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[repeat(1,minmax(0px,1fr))] opacity-0 outline-[3px] overflow-hidden rounded-lg md:hidden">
            <img
              alt="Ansicht der Daten für Herzfrequenz tagsüber in der Oura-App"
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/164.png"
              className="text-transparent self-center aspect-[auto_300_/_252] box-border col-end-2 col-start-1 row-end-2 row-start-1 max-w-full outline-[3px] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
