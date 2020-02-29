import React from "react";
import { StylesProvider } from "@material-ui/core";

export default (props) => {
    return (
        <StylesProvider injectFirst>
            <div className={styles.layout}>
                <Header />
                {props.children}
                <Footer />
            </div>
        </StylesProvider>
    );
}
