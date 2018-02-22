import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Infos: {props.info}</h1>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Private Info, only for Admin</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info='Public Infos'/>,document.getElementById('app'));
