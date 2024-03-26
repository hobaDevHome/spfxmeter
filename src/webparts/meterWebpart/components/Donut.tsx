import * as React from "react";
import { IDonutProps } from "./IDonutPeops";
import "./Donut.css";

export default class Donut extends React.Component<IDonutProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <div className="svg-item">
          <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
            <circle
              className="donut-hole"
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="#fff"
            />
            <circle
              className="donut-ring"
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="transparent"
              stroke-width="3.5"
            />
            <circle
              className="donut-segment donut-segment-3"
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="transparent"
              stroke-width="3.5"
              stroke-dasharray={`${this.props.percentage} ${
                100 - this.props.percentage
              }`}
              stroke-dashoffset="25"
            />
            <g className="donut-text donut-text-2">
              <text y="50%" transform="translate(0, 2)">
                <tspan x="50%" text-anchor="middle" className="donut-percent">
                  {this.props.percentage}%
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
