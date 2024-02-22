import type GestureHandler from '../handlers/GestureHandler';
import { GestureHandlerDelegate, MeasureResult } from './GestureHandlerDelegate';
import { Config } from '../interfaces';
export declare class GestureHandlerWebDelegate implements GestureHandlerDelegate<HTMLElement> {
    private view;
    private gestureHandler;
    private eventManagers;
    getView(): HTMLElement;
    init(viewRef: number, handler: GestureHandler): void;
    isPointerInBounds({ x, y }: {
        x: number;
        y: number;
    }): boolean;
    measureView(): MeasureResult;
    reset(): void;
    tryResetCursor(): void;
    private shouldDisableContextMenu;
    private addContextMenuListeners;
    private removeContextMenuListeners;
    private disableContextMenu;
    private enableContextMenu;
    onBegin(): void;
    onActivate(): void;
    onEnd(): void;
    onCancel(): void;
    onFail(): void;
    destroy(config: Config): void;
}
