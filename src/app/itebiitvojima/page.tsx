"use client"

const handleDownloadClick = (fileName: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window && window.gtag) {
    (window.gtag as (event: string, action: string, params: unknown) => void)('event', 'file_download', {
      file_name: fileName,
      page_location: window.location.href,
    });
  }
};

export default function ITebiITvojima() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
      <main>
        <div className="bg-pattern" />
        <br />
        <h1> I tebi i tvojima! </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">

          <div className="relative">
            <h4> Click on GIF to download </h4>
            <a
              href="/itebiitvojima-pete.gif"
              download="itebiitvojima-pete.gif"
              className="block overflow-hidden rounded-lg transition-transform hover:scale-105"
              aria-label="Download GIF"
              onClick={() => handleDownloadClick('itebiitvojima-pete.gif')}
            >
              <img
                src="/itebiitvojima-pete.gif"
                alt="Itebiitvojima Pete"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </a>
          </div>
          <div className="relative">
          <h4> Click on Video to download </h4>
            <a
              href="/itebiitvojima-pete.mov"
              download="itebiitvojima-pete.mov"
              className="block overflow-hidden rounded-lg transition-transform hover:scale-105"
              onClick={() => handleDownloadClick('itebiitvojima-pete.mov')}
            >
              <video
                src="/itebiitvojima-pete.mov"
                className="w-full h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
