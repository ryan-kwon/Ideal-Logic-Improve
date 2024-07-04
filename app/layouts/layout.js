import React from "react";
// import TopBar from "./top-bar";
import Header from "./header";

import styles from "./styles/header-footer.module.css";

/*************************************************************************
 * Component: Layout
 * Description: This component includes the header and footer of the
 * application, with the children displayed between the two. This acts
 * as a layout for each page of the application.
 *************************************************************************/
const Layout = ({ children }) => (
    <div className={styles.layoutcontainer}>
        {/* <Header/> */}
        <main className={styles.bgcolor}>{children}</main>
    </div>
);

export default Layout;
