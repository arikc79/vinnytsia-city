import type { Landmark } from "../data/landmarks";

interface Props {
  landmark: Landmark;
}

const LandmarkCard = ({ landmark }: Props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition">
      <img
        src={landmark.image}
        alt={landmark.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {landmark.title}
        </h3>

        <p className="text-sm text-gray-600">
          {landmark.description}
        </p>
      </div>
    </div>
  );
};

export default LandmarkCard;
