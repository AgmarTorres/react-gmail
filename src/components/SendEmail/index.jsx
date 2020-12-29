import React from "react";
import "./styles.css";
import { Close, ErrorSharp } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {};

  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail_error">To is required! </p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is required! </p>
        )}
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message..."
          type="text"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is required! </p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
