import data from "../mock/data.json";

const photos = [
  {
    id: 1,
    url: new URL("../assets/gallery/photo-1.webp", import.meta.url).href,
    alt: "foto de vegetales",
  },
  {
    id: 2,
    url: new URL("../assets/gallery/photo-2.webp", import.meta.url).href,
    alt: "foto de un agricultor",
  },
  {
    id: 3,
    url: new URL("../assets/gallery/photo-3.webp", import.meta.url).href,
    alt: " foto de vegetales con carne",
  },
  {
    id: 4,
    url: new URL("../assets/gallery/photo-4.webp", import.meta.url).href,
    alt: "foto de personas felices",
  },
  {
    id: 5,
    url: new URL("../assets/gallery/photo-5.webp", import.meta.url).href,
    alt: "foto de vegetales",
  },
  {
    id: 6,
    url: new URL("../assets/gallery/photo-6.webp", import.meta.url).href,
    alt: "foto de vegetales",
  },
];

const Gallery = () => {
  const { gallery } = data;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 text-center">{gallery.title}</h2>
      <div className="grid grid-cols-gallery-grid gap-5 place-content-center">
        {photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className="object-cover w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
