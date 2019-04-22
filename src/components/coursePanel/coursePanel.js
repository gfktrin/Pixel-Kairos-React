import React from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';

import './coursePanel.scss';

class CoursePanel extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <Col m={3} s={12} />
          <Col m={8} s={12}>
            <h5 className="subtitle">Curso de desenvolvimento de games</h5>
            <Collapsible>
              <CollapsibleItem header="Módulo 1: RPG com Construct 2" icon="folder">
                <Collapsible>
                  <CollapsibleItem header="Aula 1: ?" icon="ondemand_video">
                  <a href="#">
                    <img className="video-thumb" alt="Video thumbnail" src="video-thumb.jpg" width="150" height="100" />
                  </a>
                  </CollapsibleItem>
                  <CollapsibleItem header="Aula 2: ?" icon="ondemand_video">
                  Yeah, you do seem to have a little 'shit creek' action going.
                  </CollapsibleItem>
                  <CollapsibleItem header="Aula 3: ?" icon="ondemand_video">
                  You know, FYI, you can buy a paddle. Did you not plan for this contingency?
                </CollapsibleItem>
              </Collapsible>
              </CollapsibleItem>
              <CollapsibleItem header="Módulo 2: ?" icon="folder">
              Yeah, you do seem to have a little 'shit creek' action going.
              </CollapsibleItem>
              <CollapsibleItem header="Módulo 3: ?" icon="folder">
              You know, FYI, you can buy a paddle. Did you not plan for this contingency?
              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CoursePanel;
