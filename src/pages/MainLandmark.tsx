import { landmarks } from "../data/landmarks";

const MainLandmark = () => {
  const main = landmarks[0];

  return (
    <section className="max-w-4xl text-white">
      <h1 className="text-3xl font-bold mb-6">
        {main.title}
      </h1>

      <img
        src={main.image}
        alt={main.title}
        className="max-w-xl rounded shadow mb-4"
      />

      <p className="text-white/90 leading-relaxed">
        {main.description}
      </p>
    </section>
  );
};

export default MainLandmark;
