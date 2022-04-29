import React from "react";
import { Helmet } from "react-helmet-async";

const DocumentMeta = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

export default DocumentMeta;
