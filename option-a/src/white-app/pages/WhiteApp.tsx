import * as React from "react";
import { WhiteService } from "../services/white.service"
import WhiteComponent from "../components/WhiteComponent"

import CommonComponent from "../../common/CommonComponent"

export default class WhiteApp extends React.Component {
  public constructor(props: any) {
    super(props);
  }
  
  public render() {

    let data = WhiteService.GetData();

    return (
      <div className="channelApp">
        <h1>
          White app page
        </h1>
        <WhiteComponent/>
        <div>
          <h4>
            White app page data
          </h4>
          <p>
            { data.data }
          </p>
        </div>
        <div>
          <h4>
            Common data
          </h4>
            <CommonComponent/>
        </div>
      </div>
    );
  }
}
