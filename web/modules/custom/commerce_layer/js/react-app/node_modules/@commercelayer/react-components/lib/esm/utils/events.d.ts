type TEvent = 'open-cart';
declare function subscribe(eventName: TEvent, listener: EventListenerOrEventListenerObject): void;
declare function unsubscribe(eventName: TEvent, listener: EventListenerOrEventListenerObject): void;
declare function publish(eventName: TEvent, data?: any): void;
export { publish, subscribe, unsubscribe };
