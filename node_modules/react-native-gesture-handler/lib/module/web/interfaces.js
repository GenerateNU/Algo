export let MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["LEFT"] = 1] = "LEFT";
  MouseButton[MouseButton["MIDDLE"] = 2] = "MIDDLE";
  MouseButton[MouseButton["RIGHT"] = 4] = "RIGHT";
  MouseButton[MouseButton["BUTTON_4"] = 8] = "BUTTON_4";
  MouseButton[MouseButton["BUTTON_5"] = 16] = "BUTTON_5";
  MouseButton[MouseButton["ALL"] = 31] = "ALL";
})(MouseButton || (MouseButton = {}));

export let EventTypes;

(function (EventTypes) {
  EventTypes[EventTypes["DOWN"] = 0] = "DOWN";
  EventTypes[EventTypes["ADDITIONAL_POINTER_DOWN"] = 1] = "ADDITIONAL_POINTER_DOWN";
  EventTypes[EventTypes["UP"] = 2] = "UP";
  EventTypes[EventTypes["ADDITIONAL_POINTER_UP"] = 3] = "ADDITIONAL_POINTER_UP";
  EventTypes[EventTypes["MOVE"] = 4] = "MOVE";
  EventTypes[EventTypes["ENTER"] = 5] = "ENTER";
  EventTypes[EventTypes["LEAVE"] = 6] = "LEAVE";
  EventTypes[EventTypes["CANCEL"] = 7] = "CANCEL";
})(EventTypes || (EventTypes = {}));

export let TouchEventType;

(function (TouchEventType) {
  TouchEventType[TouchEventType["UNDETERMINED"] = 0] = "UNDETERMINED";
  TouchEventType[TouchEventType["DOWN"] = 1] = "DOWN";
  TouchEventType[TouchEventType["MOVE"] = 2] = "MOVE";
  TouchEventType[TouchEventType["UP"] = 3] = "UP";
  TouchEventType[TouchEventType["CANCELLED"] = 4] = "CANCELLED";
})(TouchEventType || (TouchEventType = {}));

export let PointerType;

(function (PointerType) {
  PointerType["NONE"] = "none";
  PointerType["MOUSE"] = "mouse";
  PointerType["TOUCH"] = "touch";
  PointerType["PEN"] = "pen";
})(PointerType || (PointerType = {}));
//# sourceMappingURL=interfaces.js.map