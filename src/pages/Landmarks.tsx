import LandmarkCard from "../components/LandmarkCard";
import { landmarks } from "../data/landmarks";

const Landmarks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Визначні місця Вінниці
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {landmarks.map((lm) => (
          <LandmarkCard key={lm.id} landmark={lm} />
        ))}
      </div>
    </div>
  );
};

export default Landmarks;
