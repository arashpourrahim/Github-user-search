import { Button } from "../UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";

export function UserCard({ user }) {
  const { login, avatar_url } = user;
  const navigate = useNavigate();

  const userPageHandler = () => {
    navigate(`/user/${login}`);
  };

  return (
    <Link to={`/user/${login}`}>
      <div className="w-84 flex flex-col justify-center items-center border border-gray-300 border-dotted p-2 mt-4 rounded-sm hover:border-gray-600 transition-all delay-150">
        <div className="border border-gray-300 rounded-full w-18 h-18 flex justify-center items-center">
          <img
            src={avatar_url}
            alt={login}
            title={login}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <h3 className="text-gray-900 font-bold text-base mt-3">{login}</h3>
        <div className="my-4">
          <Button onClick={userPageHandler} primary={true}>
            More
          </Button>
        </div>
      </div>
    </Link>
  );
}
