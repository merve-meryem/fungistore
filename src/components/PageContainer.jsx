import React from "react";
import Container from "@mui/material/Container";

function PageContainer({ children }) {
  return (
    <div>
      <Container maxWidth="lg" className="relative pt-40 pb-20 bg-amber-100">
        {children}
      </Container>
    </div>
  );
}

export default PageContainer;
