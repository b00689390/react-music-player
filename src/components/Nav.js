import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className="flex justify-between lg:justify-around items-center min-h-[10vh] py-4 px-8">
      <h1 className="font-source tracking-widest px-2 text-[28px] leading-tight md:text-[32px] lg:text-[38px] text-indigo-500 inline-block w-auto pb-1 border-b-4 border-indigo-500">
        Spoofify
      </h1>
      <button
        tabIndex="0"
        className="btn"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        <span className="hidden lg:inline-block">Library</span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
