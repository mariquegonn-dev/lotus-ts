import React from "react";

type headType = {
  title: string;
  description: string;
};

const Head = ({ title, description }: headType) => {
  React.useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description);
  });

  return <></>;
};

export default Head;
