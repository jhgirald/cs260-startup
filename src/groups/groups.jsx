import React from 'react';
import { Helmet } from 'react-helmet';
import AddList from './scripts';

export function Groups() {
  return (
    <main>
    <Helmet>
    </Helmet>
        <AddList/>
        <div>
            <ul className="list-group list-group-light" id = "chatList">
            </ul>
        </div>
    </main>
  );
}