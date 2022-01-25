import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./store/actions";
import { IUser, IStoreState } from "./store/interface-types";
import "./styles.css";

interface FxAppProps {
  appName?: string;
}

interface AppProps {
  users: IUser[];
  fetchUsers(): any;
}

const FnApp = (props: FxAppProps): JSX.Element => {
  return <div>This is {props.appName} </div>;
};

class _App extends React.Component<AppProps> {
  onBtnClick = (): void => {
    this.props.fetchUsers();
  };

  render() {
    return (
      <div className="App">
        <FnApp appName="Functional components" />
        <br />
        <button onClick={this.onBtnClick}>Fetch Users</button>

        <h2>{this.props.users.length} </h2>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState): { users: IUser[] } => {
  return { users: state.users };
};

export const App = connect(mapStateToProps, { fetchUsers })(_App);
