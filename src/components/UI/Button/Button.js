export function Button({ onClick, children, primary }) {
  return (
    <button
      className={` ${
        primary
          ? "bg-gray-700  rounded-sm text-center text-base font-semibold p-2 text-white hover:bg-gray-500 transition-all ease-out delay-150"
          : "bg-gray-200 w-full rounded-sm text-base font-semibold p-2 hover:bg-gray-300 transition-all ease-out delay-150"
      } `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
