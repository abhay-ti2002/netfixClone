import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Something went wrong 😢</p>
      <p>
        {err?.status} : {err?.statusText || "Unknown Error"}
      </p>
    </div>
  );
};

export default Error;
