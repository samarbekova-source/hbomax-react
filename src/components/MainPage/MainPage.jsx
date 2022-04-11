import { StepForwardOutlined } from "@ant-design/icons";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <div>
        <StepForwardOutlined />
        <h1>Explore Collections</h1>
      </div>
      <div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzM2MjcxYzgtNTNkMy00NmVhLTllMWQtZmU5N2I0ZmFiZTQzXkEyXkFqcGdeQXVyODU4NzI4NDI@._V1_FMjpg_UX1000_.jpg"
            alt="moonshoot"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg"
            alt="gameOfThrones"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
            alt="harryPotter"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
