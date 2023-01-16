import React, { Fragment, useEffect, useContext } from "react";
import { UserContext } from "../../context";

const Standard = ({history,match}) => {
    const [state, setState] = useContext(UserContext);
    
    useEffect(() => {
        let result = [];
        const check = () =>
          state &&
          state.user &&
          state.user.subscriptions &&
          state.user.subscriptions.map((sub) => {
            result.push(sub.plan.nickname);
          });
        check();
    
        // console.log("MATCH", match);
        const plan = match.path.split("/")[1].toUpperCase(); // basic
        if (!result.includes(plan)) {
          history.push("/");
        }
      }, [state && state.user]);

    return (
        <div>
            <Fragment>
                <div className="container-fluid">
                    <div className="row py-5 bg-light text-center">
                        <h1 className="display-4 fw-bold">BASIC</h1>
                        <p className="lead">Here are your 5 exclusive stock of the month</p>
                    </div>
                </div>

            </Fragment>

        </div>
    )
}

export default Standard