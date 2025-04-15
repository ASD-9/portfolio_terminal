import "./Header.css"
import { useHeader } from "./useHeader";

type HeaderProps = {
  title: string;
  projectId?: number
}

const Header = ({ title, projectId }: HeaderProps) => {
  const { handleCloseClick } = useHeader();

  return (
    <div className="header">
      <p className="header-title">{title}</p>
      <div className="buttons">
        <div className="button green"></div>
        <div className="button yellow"></div>
        <div
          className={`button red ${projectId ? 'pointer' : ''}`}
          onClick={() => {
            if (projectId) {
              handleCloseClick(projectId);
            }
          }}
        ></div>
      </div>
    </div>
  )
}

export default Header;
