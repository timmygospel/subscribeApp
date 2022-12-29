import React, { useContext, useEffect } from "react";
import { WarningTwoTone } from "@ant-design/icons";
import axios from "axios";
import { UserContext } from "../context";

const StripeSuccess = ({ history }) => {
  const [state,setState] = useContext(UserContext);

  useEffect(()=> {
    const getSubscriptionStatus =  async() => {
      const {data} = await axios.get('/subscription-status')
      console.log("SUSBCRIPTION STATUS => ", data);
      if (data && data.length === 0) {
          history.pushState('/')
      } else {
        //update user in local storage
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth".JSON.stringify(auth));
        //update user context
        setState(auth);
        history.push('/account');
        setTimeout(()=> {
          history.push("/account");
        }, 1000);
      }
    }
    getSubscriptionStatus();
  }, [])

  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        <WarningTwoTone style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default StripeSuccess;