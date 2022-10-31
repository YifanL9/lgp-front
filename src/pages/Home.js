import { Container, Row } from "react-bootstrap";
import { useState } from "react";

import Authenticate_modal from "../components/Authenticate_modal";
import Navgation from "../components/Nav";

const Home = () => {
  const authToken = true;
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Navgation />
      <br />
      <br />
      <Container>
        <h1>LGP</h1>
        <button className="sign_up_btn" onClick={handleClick}>
          Sign Up
        </button>
      </Container>
      {showModal && <Authenticate_modal setShowModal={setShowModal} />}
    </div>
  );
};

export default Home;
