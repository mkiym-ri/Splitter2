import React from "react";
import ReactDOM from "react-dom";
import { Page, Toolbar, ToolbarButton, Icon } from "react-onsenui";
export default class Page3 extends React.Component {
constructor(props) {
super(props);
this.renderToolbar = this.renderToolbar.bind(this);
}
renderToolbar() {
  return (
    <Toolbar>
      <div className='left'>
        <ToolbarButton onClick={this.props.show}>
          <Icon icon='md-menu' />
        </ToolbarButton>
      </div>
      <div className="center">ページ3</div>
    </Toolbar>
  );
}
render(){
  return(
    <Page renderToolbar={this.renderToolbar}>
    PAGE3
    </Page>
  );
}
}
