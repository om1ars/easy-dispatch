import React from "react";

export default function Messages() {
  return (
    <div>
      <div className="chat_list">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="pull-left hidden-xs">
              <div>
                <img
                  className="img-circle"
                  title="User1"
                  alt="User1"
                  data-src="holder.js/40x40/lava"
                />
              </div>
            </div>
            <small className="pull-right text-muted">10.12.2014 in 12:56</small>
            <div>
              <small className="list-group-item-heading text-muted text-primary">
                User1
              </small>
              <p className="list-group-item-text">
                Hi! this message is FOR you.
              </p>
            </div>
          </li>
          <li className="list-group-item">
            <div className="pull-left hidden-xs">
              <div>
                <img
                  className="img-circle"
                  title="You"
                  alt="You"
                  data-src="holder.js/40x40/industrial"
                />
              </div>
            </div>
            <small className="pull-right text-muted">10.12.2014 in 12:57</small>
            <div>
              <small className="list-group-item-heading text-muted">You</small>
              <p className="list-group-item-text">
                This response message FROM you.
              </p>
            </div>
          </li>
          <li className="list-group-item">
            <div className="pull-left hidden-xs">
              <div>
                <img
                  className="img-circle"
                  title="User2"
                  alt="User2"
                  data-src="holder.js/40x40/vine"
                />
              </div>
            </div>
            <small className="pull-right text-muted">10.12.2014 in 12:58</small>
            <div>
              <small className="list-group-item-heading text-muted text-primary">
                User2
              </small>
              <p className="list-group-item-text">
                Very long text. He correctly displayed. Very long text. He
                correctly displayed. Very long text. He correctly displayed.
                Very long text. He correctly displayed. Very long text. He
                correctly displayed. Very long text. He correctly displayed.
                Very long text. He correctly displayed. Very long text. He
                correctly displayed.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
