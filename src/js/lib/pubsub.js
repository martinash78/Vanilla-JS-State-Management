export default class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    let self = this;

    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }

    console.log("subscribe to event " + event);

    return self.events[event].push(callback);
  }

  publish(event, data = {}) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      return [];
    }
    console.log("publish event " + event);
    return self.events[event].map((callback) => callback(data));
  }
}
