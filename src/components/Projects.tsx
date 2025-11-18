import LiveText from "@/components/LiveText";
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
      <LiveText tag="h2" hoverText="Portfolio" style={{ textAlign: "center" }}>
        Portfolio
      </LiveText>

      <Section>
        <Project
          videoUrl="/projects/video-pt.mp4"
          heading="PT"
          paragraph="Volimo raditi s Maraskom, pogotovo na IG profilu pete_maraska, koji u potpunosti kreiramo, vodimo i punimo svježim idejama. Od postova i reelsa do dnevnih storija, svaki kadar, video i caption nastaje u našem malom kreativnom laboratoriju koji je stalni izvor smijeha i inspiracije. I ono nama najvažnije - kreativne slobode koju smo oduvijek željele."
          position="right"
          galleryImages={ptGalleryImages}
        />
      </Section>

      <Section>
        <Project
          videoUrl="/projects/video-mb.mp4"
          heading="Madre Badessa"
          paragraph="Priča o Madre Badessa Spirits priča je o neprestanoj potrazi za svježim i kreativnim načinima da ljubiteljima finih pića približimo svijet premium likera i rakija. Iz mjeseca u mjesec stvaramo sadržaj koji otkriva sve ono što ovaj 100% hrvatski proizvod čini posebnim - autentičnost, profinjenost i dašak “pomalo lifestylea” kojem svi ponekad težimo. Kroz pažljivo oblikovane riječi, upečatljivu fotografiju i atmosferične video priče nastojimo prenijeti ljepotu rituala guštanja."
          position="left"
          galleryImages={madreBadessaGalleryImages}
        />
      </Section>
    </Section>
  );
}

