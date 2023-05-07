import { useNavigate } from "react-router-dom";

const Base = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <button style={{ padding: "10px" }} onClick={() => navigate("/data")}>
        All Data
      </button>
      <button style={{ padding: "10px" }} onClick={() => navigate("/form")}>
        Form
      </button>
    </div>
  );
};

export default Base;
