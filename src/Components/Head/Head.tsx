import React from "react";

type headType = {
  title: string;
  description: string;
};

const Head = (props: headType) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", props.description);
  });

  return <></>;
};

export default Head;
