import { TurboModule } from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
export interface Spec extends TurboModule {
    handleSetJSResponder: (tag: Int32, blockNativeResponder: boolean) => void;
    handleClearJSResponder: () => void;
    createGestureHandler: (handlerName: string, handlerTag: Int32, config: Object) => void;
    attachGestureHandler: (handlerTag: Int32, newView: Int32, actionType: Int32) => void;
    updateGestureHandler: (handlerTag: Int32, newConfig: Object) => void;
    dropGestureHandler: (handlerTag: Int32) => void;
    install: () => boolean;
    flushOperations: () => void;
}
declare const _default: Spec;
export default _default;
