import img1 from "../assets/gallery/vinnytsia-1.jpg";
import img2 from "../assets/gallery/vinnytsia-2.png";
import img3 from "../assets/gallery/vinnytsia-3.jpg";
import img4 from "../assets/gallery/vinnytsia-4.png";
import img5 from "../assets/gallery/vinnytsia-5.jpeg";
import img6 from "../assets/gallery/vinnytsia-6.jpg";
import img7 from "../assets/gallery/vinnytsia-7.jpg";
import img8 from "../assets/gallery/vinnytsia-8.jpg";
import img9 from "../assets/gallery/vinnytsia-9.jpg";
import img10 from "../assets/gallery/vinnytsia-10.jpg";
import img11 from "../assets/gallery/vinnytsia-11.jpg";
import img12 from "../assets/gallery/vinnytsia-12.jpg";
import img13 from "../assets/gallery/vinnytsia-13.jpg";
import img14 from "../assets/gallery/vinnytsia-14.jpg";
import img15 from "../assets/gallery/vinnytsia-15.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

const Gallery = () => {
  return (
    <section className="max-w-6xl mx-auto bg-white rounded-lg shadow p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Галерея Вінниці
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Вінниця ${idx + 1}`}
            className="w-full h-48 object-cover rounded shadow-sm hover:shadow-md transition"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
