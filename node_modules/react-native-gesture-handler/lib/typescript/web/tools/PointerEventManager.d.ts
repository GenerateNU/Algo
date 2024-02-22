import { AdaptedEvent, EventTypes } from '../interfaces';
import EventManager from './EventManager';
export default class PointerEventManager extends EventManager<HTMLElement> {
    private trackedPointers;
    private readonly mouseButtonsMapper;
    constructor(view: HTMLElement);
    setListeners(): void;
    protected mapEvent(event: PointerEvent, eventType: EventTypes): AdaptedEvent;
    resetManager(): void;
}
