import React, { Component } from "react";

interface IProps {
  message: string;
  backgroundColor?: string;
}


class BoxMessage extends Component<IProps, {}> {
  render() {
    return (
      <div className={`${this.props.backgroundColor} text-white rounded-xl p-4`}>
        <p className="text-sm">{this.props.message}</p>
      </div>
    );
  }
}

export class BoxMessageError extends Component<IProps, {}> {
  render() {
    return <BoxMessage message={this.props.message} backgroundColor="bg-red-800" />;
  }
}

export class BoxMessageSuccess extends Component<IProps, {}> {
  render() {
    return <BoxMessage message={this.props.message} backgroundColor="bg-green-800" />;
  }
}

export class BoxMessageWarning extends Component<IProps, {}> {
  render() {
    return <BoxMessage message={this.props.message} backgroundColor="bg-yellow-800" />;
  }
}
