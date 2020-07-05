import * as React from "react";
import { BlackService } from "../services/black.service"
import BlackComponent from "../components/BlackComponent"

import CommonComponent from "../../common/CommonComponent"

export default class BlackApp extends React.Component {
  public constructor(props: any) {
    super(props);
  }
  
  public render() {

    let data = BlackService.GetData();

    return (
      <div className="channelApp">
        <h1>
          Black app page
        </h1>
        <BlackComponent/>
        <div>
          <h4>
            Black app page data
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
