import React from 'react';
import { GestureType, HandlerCallbacks } from './gesture';
import { SharedValue } from './reanimatedWrapper';
import { UserSelect } from '../gestureHandlerCommon';
import { ComposedGesture } from './gestureComposition';
export type GestureConfigReference = {
    config: GestureType[];
    animatedEventHandler: unknown;
    animatedHandlers: SharedValue<HandlerCallbacks<Record<string, unknown>>[] | null> | null;
    firstExecution: boolean;
    useReanimatedHook: boolean;
};
interface GestureDetectorProps {
    gesture: ComposedGesture | GestureType;
    children?: React.ReactNode;
    userSelect?: UserSelect;
    enableContextMenu?: boolean;
}
export declare const GestureDetector: (props: GestureDetectorProps) => React.JSX.Element;
export {};
