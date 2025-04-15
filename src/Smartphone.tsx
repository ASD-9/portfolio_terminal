import { ReactNode } from "react";
import { Rnd } from "react-rnd";
import "./index.css";

type SmartphoneProps = {
  children: ReactNode;
  projectTitle: string;
};

const Smartphone = ({ children, projectTitle }: SmartphoneProps) => {
  return (
    <Rnd dragHandleClassName="header" enableResizing={false}>
    <div className="phone-container">
        <div className="header">
          <p className="header-title">{projectTitle}</p>
          <div className="buttons">
            <div className="button green"></div>
            <div className="button yellow"></div>
            <div className="button red"></div>
          </div>
        </div>
        
        <div className="phone-body">
            <div className="phone-screen">
                <div className="status-bar">
                    <div className="time">10:30</div>
                    <div className="status-icons">
                        <div className="network">5G</div>
                        <div className="battery">85%</div>
                    </div>
                </div>
                
                <div className="camera-cutout">
                    <div className="camera-lens"></div>
                </div>
                
                <div className="content-area">
                    {children}
                </div>
            </div>
        </div>
    </div>
    </Rnd>
  );
};

export default Smartphone;
