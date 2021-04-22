import React from "react";
import { ThemeProvider } from "styled-components";

import { AppStateProvider, useAppState } from "./providers/AppStateProvider";
import Notifications from "./containers/Notifications";
import ErrorProvider from "./providers/ErrorProvider";
import { NavigationProvider } from "./providers/NavigationProvider";
import {
    lightTheme,
    MeetingProvider,
    NotificationProvider,
    darkTheme,
    GlobalStyles,
} from "amazon-chime-sdk-component-library-react";

const Theme = ({ children }) => {
    const { theme } = useAppState();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export function RootProvider(props) {
    return (
        <AppStateProvider>
            <Theme>
                <NotificationProvider>
                    <Notifications />
                    <ErrorProvider>
                        <MeetingProvider
                        >
                            <NavigationProvider>
                                {props.children}
                            </NavigationProvider>
                        </MeetingProvider>
                    </ErrorProvider>
                </NotificationProvider>
            </Theme>
        </AppStateProvider>
    )
}

export default RootProvider;