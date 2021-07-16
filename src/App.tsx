// modules
import React from "react";

// components
import Layout from "./components/Layouts";
import Content from "./components/Content";

// styles
import "./index.scss";

const App: React.FC = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default App;
