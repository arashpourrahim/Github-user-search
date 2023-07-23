import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/store";
import { GET_USER_INFO, GET_USER_REPO } from "../../../Services/userService";
import { Button } from "../../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import checkedIcon from "../../../Assets/Icons/check.png";
import closeIcon from "../../../Assets/Icons/close.png";

export function User() {
  const { state } = useContext(UserContext);
  const { userLoginName } = state;

  const navigate = useNavigate();

  const [userInformation, setUserInformation] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const userInfo = async () => {
      try {
        const res = await GET_USER_INFO(userLoginName);
        const resultRepository = await GET_USER_REPO(userLoginName);
        setUserInformation(res.data);
        setRepos(resultRepository.data);
      } catch (error) {
        if (error.response.status === 404) navigate("/");
      }
    };
    userInfo();
  }, [navigate, userLoginName]);

  const backToHomeHandler = () => {
    navigate("/");
  };

  return (
    <article className="max-w-[1024px] mx-auto">
      <header className="flex flex-row justify-between items-center my-4">
        <div>
          <Button onClick={backToHomeHandler} primary={false}>
            Back To Search
          </Button>
        </div>
        <div>
          <h4 className="text-base font-medium flex items-center">
            hireable :{" "}
            {userInformation.hireable !== null ? (
              <img src={checkedIcon} alt="checked" width={18} height={18} />
            ) : (
              <img src={closeIcon} alt="close" width={18} height={18} />
            )}
          </h4>
        </div>
      </header>
      <section className="border border-dotted border-gray-500 flex flex-col md:flex-row items-center justify-around p-4 my-2 rounded-sm">
        <div className="w-1/2 text-center">
          <img
            src={userInformation.avatar_url}
            alt={userInformation.login}
            title={userInformation.login}
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
          <h3 className="mt-4 text-base font-semibold">
            {userInformation.login}
          </h3>
          <h3 className="mt-1 text-xs font-normal">
            {userInformation.location === null ? "" : userInformation.location}
          </h3>
        </div>
        <div className=" w-full md:w-1/2">
          <div>
            {userInformation.bio === null ? (
              ""
            ) : (
              <>
                <h4 className="text-base font-bold">Bio:</h4>
                <p className="text-sm font-normal ml-2">
                  {userInformation.bio}
                </p>{" "}
              </>
            )}
          </div>
          <div className="my-4">
            {userInformation.html_url === null ? (
              ""
            ) : (
              <a
                href={userInformation.html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 py-2 px-3 text-white rounded-sm"
              >
                View Github Page
              </a>
            )}
          </div>
          <>
            {userInformation.login === null ? (
              ""
            ) : (
              <p className="text-base font-bold">
                Login:
                <span className="text-sm font-normal ml-2">
                  {userInformation.login}
                </span>
              </p>
            )}
          </>

          <>
            {userInformation.blog === "" ? (
              ""
            ) : (
              <p className="text-base font-bold">
                Website:{" "}
                <span className="text-sm font-normal ml-2">
                  {userInformation.blog}
                </span>
              </p>
            )}
          </>

          <>
            {userInformation.company === null ? (
              ""
            ) : (
              <p className="text-base font-bold">
                Company:{" "}
                <span className="text-sm font-normal ml-2">
                  {userInformation.company}
                </span>
              </p>
            )}
          </>
        </div>
      </section>
      <section className="border border-dotted border-gray-500 flex flex-wrap items-center justify-center p-4 my-2 rounded-sm">
        <p className="w-36 my-1 text-center mx-2 bg-red-700 py-2 px-3 text-white text-xs font-semibold rounded-md border border-gray-300">
          Followers: {userInformation.followers}
        </p>
        <p className="w-36 my-1 text-center mx-2 bg-gray-200 py-2 px-3 text-black text-xs font-semibold rounded-md border border-gray-300">
          Following: {userInformation.following}
        </p>
        <p className="w-36 my-1 text-center mx-2 bg-green-700 py-2 px-3 text-white text-xs font-semibold rounded-md border border-gray-300">
          Public Repos: {userInformation.public_repos}{" "}
        </p>
        <p className="w-36 my-1 text-center mx-2 bg-gray-700 py-2 px-3 text-white text-xs font-semibold rounded-md border border-gray-300">
          Public Gists: {userInformation.public_gists}{" "}
        </p>
      </section>
      <section>
        {repos.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-gray-500 border-dotted p-4 my-2 rounded-sm"
            >
              <a
                href={item.html_url}
                target="_blank"
                className="font-normal text-red-500"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </div>
          );
        })}
      </section>
    </article>
  );
}
