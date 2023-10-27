import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import moment from "moment";
import 'moment/locale/ru';

moment.locale('ru');

export default function Post({ post }) {

    const [redirect, setRedirect] = useState(false);

    if (!(post)) return null;

    const { created, content } = post;

    const createdTxt = moment(created).startOf('minute').fromNow();

    if (redirect)
        return <Navigate to="/posts/:id" replace={true} push />

    return (
        <div className="card w-50">
            <div className="card-body" onClick={() => setRedirect(true)}>
                <h5 className="card-title">{'James Johns'}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{createdTxt}</h6>
                <p className="card-text">{content}</p>
            </div>
        </div>
    );
}
