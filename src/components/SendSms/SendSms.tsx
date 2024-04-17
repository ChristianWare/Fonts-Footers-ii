"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./SendSms.module.css";
import { useState } from "react";

const SendSms = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = async () => {
    const response = await fetch("/api/bulksms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        phone,
        message,
      }),
    });
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2>sms</h2>
        <div className={styles.bottom}>
          <input
            type='text'
            placeholder='Phone Number'
            className={styles.loginInput}
            onChange={(event) => setPhone(event.target.value)}
          />
          <br />
          <textarea id='body' rows={6} placeholder='Message Body'></textarea>
          <button onClick={sendSMS} className={styles.btn}></button>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default SendSms;
