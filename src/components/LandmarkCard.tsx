import type{ Landmark } from "../data/landmarks";

interface Props {
  landmark: Landmark;
}

const LandmarkCard = ({ landmark }: Props) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">
        {landmark.title}
      </h3>

      <p className="text-sm text-gray-600">
        Wikipedia key: <span className="italic">{landmark.wikiTitle}</span>
      </p>
    </div>
  );
};

export default LandmarkCard;

