import { Link } from "react-router-dom";
import Card from "../utils/Card";

const PeopleItem = ({ people }) => {
  return (
    <Link to="">
      <Card className="bg-color-dark-1 h-full">
        <Card.Image
          src={`https://media.themoviedb.org/t/p/w235_and_h235_face${people.profile_path}`}
          alt="People"
        />
        <Card.Text
          className="px-4 pb-3"
          title={people.name}
          subTitle={people.known_for.map((known) => known.title).join(", ")}
        />
      </Card>
    </Link>
  );
};

export default PeopleItem;
