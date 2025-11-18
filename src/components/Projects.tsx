import Project from "@/components/Project";
import Section from "@/components/Section";

const ptGalleryImages = [
  {
    src: "/projects/galerija-pt-1.jpeg",
    thumb: "/projects/galerija-pt-1-thumb.jpeg",
    caption: "pete_maraska Ljubavna dostava je pred vratima! 🚪"
  },
  {
    src: "/projects/galerija-pt-2.jpeg",
    thumb: "/projects/galerija-pt-2-thumb.jpeg",
    caption: "pete_maraska S vrimenom se nije za zafrkavat'! 🧎‍♂️"
  },
  {
    src: "/projects/galerija-pt-3.jpeg",
    thumb: "/projects/galerija-pt-3-thumb.jpeg",
    caption: "pete_maraska PeTe u limenci - uvijek savršeno serviran! 🏆"
  },
  {
    src: "/projects/galerija-pt-4.jpeg",
    thumb: "/projects/galerija-pt-4-thumb.jpeg",
    caption: "pete_maraska Ovog lita nigdi bez SPF-a! 📸 🧢 🥂"
  },
  {
    src: "/projects/galerija-pt-5.jpeg",
    thumb: "/projects/galerija-pt-5-thumb.jpeg",
    caption: "pete_maraska 🧦 Giveaway 👚 Obuci se od glave do PeTe!"
  }
];

const madreBadessaGalleryImages = [
  {
    src: "/projects/galerija-mb-1.jpeg",
    thumb: "/projects/galerija-mb-1-thumb.jpeg",
    caption: "madrebadessa.spirits Manna ~ orahovac izronio iz dubina tradicije. 🌊"
  },
  {
    src: "/projects/galerija-mb-2.jpeg",
    thumb: "/projects/galerija-mb-2-thumb.jpeg",
    caption: "madrebadessa.spirits InAmorana uz vas...i poglede koji traju onaj sekund duže. 😉"
  },
  {
    src: "/projects/galerija-mb-3.jpeg",
    thumb: "/projects/galerija-mb-3-thumb.jpeg",
    caption: "madrebadessa.spirits Mo'š mi dodat' malo jubavi? 🍒"
  },
  {
    src: "/projects/galerija-mb-4.jpeg",
    thumb: "/projects/galerija-mb-4-thumb.jpeg",
    caption: "madrebadessa.spirits Rekla sam mu da se pobrine za desert. Nije razočarao. ~ InAmorana, slatka ka jubav ujesen. ❤️"
  },
  {
    src: "/projects/galerija-mb-5.jpeg",
    thumb: "/projects/galerija-mb-5-thumb.jpeg",
    caption: "madrebadessa.spirits Znan da zvučin ka' pokvarena ploča, al' ova Triska je najbolja rakija na svitu."
  }
];

export default function Projects() {
  return (
    <Section>
      <h2 style={{ textAlign: "center" }}> Portfolio </h2>

      <Section>
        <Project
          videoUrl="/projects/video-pt.mp4"
          heading="PT"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          position="right"
          galleryImages={ptGalleryImages}
        />
      </Section>

      <Section>
        <Project
          videoUrl="/projects/video-mb.mp4"
          heading="Madre Badessa"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          position="left"
          galleryImages={madreBadessaGalleryImages}
        />
      </Section>
    </Section>
  );
}

