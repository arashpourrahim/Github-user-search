/* eslint-disable no-unused-vars */
import { Fragment, useContext, useState } from "react";
import { GET_USERS } from "../../Services/userService";
import { UserCard } from "../../components/UserCard";
import { toast } from "react-toastify";
import { serverError } from "../../utils/message";
import { Button } from "../../components/UI/Button/Button";
import { UserContext } from "../../context/store";
import { ActionType } from "../../context/actionType";
import { Loader } from "../../components/UI/Loader/Loader";

export function Users() {
  const { state, dispatch } = useContext(UserContext);
  const { allUsers } = state;

  const [query, setQuery] = useState("");
  const [isCleanButton, setIsCleanButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Get All User
  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await GET_USERS(query);
      dispatch({ type: ActionType.USERS, payload: res.data.items });
      setQuery("");
      setIsCleanButton(true);
      setIsLoading(false);
    } catch (error) {
      toast.error(serverError);
    }
  };

  // Get Query from Input
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Store User Data in Context
  const userStore = (data) => {
    dispatch({ type: ActionType.USER, payload: data.login });
  };

  // Reset User List
  const clearUserDataHandler = () => {
    dispatch({ type: ActionType.CLEAR_USER });
  };

  return (
    <Fragment>
      <form onSubmit={SubmitHandler}>
        <div>
          <input
            type="text"
            name="user"
            placeholder="Please search for the desired user . . ."
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-sm py-1 px-2"
            value={query}
          />
        </div>

        <div className="mt-3 w-full ">
          <button
            type="submit"
            className="bg-gray-700 text-white font-bold text-center text-base w-full py-2 rounded-sm hover:bg-black"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="my-4 w-full">
        {allUsers.length > 0 ? (
          <Button onClick={clearUserDataHandler} primary={false}>
            Clear
          </Button>
        ) : null}
      </div>
      {isLoading && <Loader />}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {!isLoading &&
          allUsers.map((user) => {
            return (
              <div onClick={() => userStore(user)} key={user.id}>
                <UserCard user={user} />
              </div>
            );
          })}
      </section>
    </Fragment>
  );
}
