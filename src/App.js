import React, { useState } from "react";
import Form from "./component/Form";
import UserPage from "./component/UserPage";

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      {!userData ? <Form onSubmit={handleFormSubmit} /> : <UserPage data={userData} />}
    </div>
  );
};

export default App;
