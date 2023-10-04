import React, { Component } from "react";
import { MessageStatus } from "../shared/status";

interface IBoxMessageProps {
  type: MessageStatus;
  message: string;
}

export class BoxMessage extends Component<IBoxMessageProps, {}> {
  render() {
    let backgroundColor = "";

    switch (this.props.type) {
      case "success":
        backgroundColor = "bg-green-800";
        break;
      case "warning":
        backgroundColor = "bg-yellow-800";
        break;
      case "error":
        backgroundColor = "bg-red-800";
        break;
      default:
        break;
    }

    return (
      <div className={`${backgroundColor} text-white rounded-xl p-4`}>
        <p className="text-sm">{this.props.message}</p>
      </div>
    );
  }
}
