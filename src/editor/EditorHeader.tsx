import GridToggle from "./GridToggle";
import { Link } from "react-router-dom";

const EditorHeader = () => {
  return (
    <>
      <nav>
        <Link to="/tokyo">Tokyo</Link>
      </nav>
      <section>
        <GridToggle />
      </section>
    </>
  );
};

export default EditorHeader;
