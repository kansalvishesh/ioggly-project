import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CustomNavbar from './navbar';
import Footer from './footer';

const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === ('/') ? 'SlideOut' : 'SlideOut'}
         // transitionName={
        //   if(props.match.path ===('/')){
        //     'SlideOut'
        //   }else{
        //     'SlideIn'
        //   }
        // }
      >
        
        <Page {...props} />
        
      </ReactCSSTransitionGroup>
    
    </div>
};
export default PageShell;