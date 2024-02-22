import * as React from 'react';
import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
export interface GestureHandlerRootViewProps extends PropsWithChildren<ViewProps> {
}
export default function GestureHandlerRootView(props: GestureHandlerRootViewProps): React.JSX.Element;
