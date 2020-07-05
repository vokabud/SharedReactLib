import * as React from "react";
import { CommonService } from "./common.service"

export default class CommonComponent extends React.Component {
  public constructor(props: any) {
    super(props);
  }
  
  public render() {
    var data = CommonService.GetData();

    return (
      <div>
        Common Component: { data.data }
      </div>
    );
  }
}
