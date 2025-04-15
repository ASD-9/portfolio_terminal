import "./Header.css"

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      <p className="header-title">{title}</p>
      <div className="buttons">
        <div className="button green"></div>
        <div className="button yellow"></div>
        <div className="button red"></div>
      </div>
    </div>
  )
}

export default Header;
