import { useState } from "react";

interface Props {
  maxChars: number;
}
const ExpandableText = ({ maxChars }: Props) => {
  const [clicked, setClicked] = useState(true);
  const text =
    "ExpandableTextblablablablablabla discussion about Jude Bellingham's future continues today following the story that broke late on Tues lorem ipsum and all that etc";

  function toggle() {
    setClicked(!clicked);
  }

  if (clicked)
    return (
      <>
        <div>{text}</div>
        <button onClick={toggle}>Less</button>
      </>
    );
  return (
    <>
      <div>{text.slice(0, maxChars)}...</div>
      <button onClick={toggle}>More</button>
    </>
  );
};

export default ExpandableText;
