import data from "../mock/data.json";

const Gallery = () => {
  return (
    <div id="galeria">
      <h2 className="subtitle title-gradient mb-10">
        {data["seccion3-gallery"].title}
      </h2>
      <div className="grid grid-cols-gallery-grid gap-5 place-content-center">
        {data["seccion3-gallery"].photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className="object-cover w-full h-full rounded-custom"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
