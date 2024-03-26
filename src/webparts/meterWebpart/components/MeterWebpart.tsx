import * as React from "react";
import styles from "./MeterWebpart.module.scss";
import type { IMeterWebpartProps } from "./IMeterWebpartProps";
import { escape } from "@microsoft/sp-lodash-subset";
import Donut from "./Donut";

export default class MeterWebpart extends React.Component<
  IMeterWebpartProps,
  {}
> {
  public render(): React.ReactElement<IMeterWebpartProps> {
    const { hasTeamsContext } = this.props;

    return (
      <section
        className={`${styles.meterWebpart} ${
          hasTeamsContext ? styles.teams : ""
        }`}
      >
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <Donut percentage={this.props.percentage} />
      </section>
    );
  }
}
