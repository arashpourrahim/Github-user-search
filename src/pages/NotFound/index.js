import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button/Button";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <article className="w-full h-screen flex flex-col justify-center items-center ">
      <h1 className="text-center font-bold">NotFound Page</h1>
      <div className="my-3">
        <Button onClick={() => navigate(-1)}>Back To Home</Button>
      </div>
    </article>
  );
}
