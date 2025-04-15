import { ReactNode } from "react";
import { Rnd } from "react-rnd";
import "./Smartphone.css";
import Header from "../header/Header";
import { Project } from "../../types";

type SmartphoneProps = {
  children: ReactNode;
  project: Project
};

const Smartphone = ({ children, project }: SmartphoneProps) => {
  return (
    <Rnd dragHandleClassName="header" enableResizing={false}>
      <div className="phone-container">
          <Header title={project.title} projectId={project.id}></Header>
          
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
