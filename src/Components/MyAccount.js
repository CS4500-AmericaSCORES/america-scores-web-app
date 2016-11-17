import React from 'react';
import ReactDOM from 'react-dom';

class MyAccountCompiler extends React.Component {
	render () {
		const data=[];
		const constants = [{ntitle: "Name:", etitle: "Email:", ptitle: "Phone:", pwtitle: "Password:"}];
		<div className="all">
		<center><h1>My Account</h1>
		<MyAccountConstant constants={constants}/>
		<MyAccountData data={data}/>
		</center>
		</div>
	}
}

class MyAccountConstant extends React.Component {
function RenConstants(props) {
  const content = props.constants.map((constant) =>
    <div>
      <h3>{constant.ntitle}</h3>
      <br />
      <h3>{constant.etitle}</h3>
      <br />                                  
      <h3>{constant.ptitle}</h3>  
      <br />                                  
      <h3>{constant.pwtitle}</h3>         
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

};

class MyAccountData extends React.Component {
function RenData(props) {
  const content = props.data.map((adata) =>
    <div>
      <h3>{adata.name}</h3>
      <br />
      <h3>{adata.email}</h3>
      <br />                                 
       <h3>{adata.phone}</h3>  
      <br />                                  
      <h3>{adata.password}</h3>         
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

};

export {
	MyAccountCompiler
	MyAccountConstant
	MyAccountData
}
RenderDOM.render(
	<MyAccountCompiler data={[]} />
	document.getElementById('root')
	);
