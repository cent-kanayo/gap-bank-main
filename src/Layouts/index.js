import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import withRouter from '../Components/Common/withRouter';

//import Components
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import RightSidebar from '../Components/Common/RightSidebar';

//import actions
import {
  changeLayout,
  changeSidebarTheme,
  changeLayoutMode,
  changeLayoutWidth,
  changeLayoutPosition,
  changeTopbarTheme,
  changeLeftsidebarSizeType,
  changeLeftsidebarViewType,
  changeSidebarImageType,
} from '../store/actions';

//redux
import { useSelector, useDispatch } from 'react-redux';

const Layout = (props) => {
  const [headerClass, setHeaderClass] = useState('');
  const [showSidebar, setShowSidebar] = useState();
  const dispatch = useDispatch();
  const {
    layoutType,
    leftSidebarType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    layoutModeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    leftSidebarImageType,
  } = useSelector((state) => ({
    layoutType: state.rootReducer.Layout.layoutType,
    leftSidebarType: state.rootReducer.Layout.leftSidebarType,
    layoutModeType: state.rootReducer.Layout.layoutModeType,
    layoutWidthType: state.rootReducer.Layout.layoutWidthType,
    layoutPositionType: state.rootReducer.Layout.layoutPositionType,
    topbarThemeType: state.rootReducer.Layout.topbarThemeType,
    leftsidbarSizeType: state.rootReducer.Layout.leftsidbarSizeType,
    leftSidebarViewType: state.rootReducer.Layout.leftSidebarViewType,
    leftSidebarImageType: state.rootReducer.Layout.leftSidebarImageType,
  }));

  /*
    layout settings
    */
  useEffect(() => {
    if (
      layoutType ||
      leftSidebarType ||
      layoutModeType ||
      layoutWidthType ||
      layoutPositionType ||
      topbarThemeType ||
      leftsidbarSizeType ||
      leftSidebarViewType ||
      leftSidebarImageType
    ) {
      dispatch(changeLeftsidebarViewType(leftSidebarViewType));
      dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
      dispatch(changeSidebarTheme(leftSidebarType));
      dispatch(changeLayoutMode(layoutModeType));
      dispatch(changeLayoutWidth(layoutWidthType));
      dispatch(changeLayoutPosition(layoutPositionType));
      dispatch(changeTopbarTheme(topbarThemeType));
      dispatch(changeLayout(layoutType));
      dispatch(changeSidebarImageType(leftSidebarImageType));
    }
  }, [
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    leftSidebarImageType,
    dispatch,
  ]);
  /*
    call dark/light mode
    */
  const onChangeLayoutMode = (value) => {
    if (changeLayoutMode) {
      dispatch(changeLayoutMode(value));
    }
  };

  const onShowSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  // class add remove in header
  useEffect(() => {
    window.addEventListener('scroll', scrollNavigation, true);
  });

  const windowSize = window.document.documentElement.clientWidth > 767;

  useEffect(() => {
    const resize = window.addEventListener('resize', () => {
      if (windowSize) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    });
    return () => window.removeEventListener('resize', resize);
  }, [windowSize]);

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setHeaderClass('topbar-shadow');
    } else {
      setHeaderClass('');
    }
  }

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header
          headerClass={headerClass}
          layoutModeType={layoutModeType}
          onChangeLayoutMode={onChangeLayoutMode}
          onShowSidebar={onShowSidebar}
        />
        {showSidebar && <Sidebar />}
        <div className="main-content" onClick={closeSidebar}>
          {props.children}
          <Footer />
        </div>
      </div>
      {/* <RightSidebar /> */}
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default withRouter(Layout);
