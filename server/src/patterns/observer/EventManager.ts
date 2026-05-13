export type EventListener = (data: any) => void;

export interface IEventManager {
  subscribe(event: string, listener: EventListener): void;
  unsubscribe(event: string, listener: EventListener): void;
  notify(event: string, data: any): void;
}

export class EventManager implements IEventManager {
  private listeners: Map<string, EventListener[]> = new Map();

  subscribe(event: string, listener: EventListener): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }

  unsubscribe(event: string, listener: EventListener): void {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      const index = eventListeners.indexOf(listener);
      if (index !== -1) eventListeners.splice(index, 1);
    }
  }

  notify(event: string, data: any): void {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach(listener => {
        try {
          listener(data);
        } catch (error) {
          console.error(`Error in listener for event ${event}:`, error);
        }
      });
    }
  }
}

export const eventBus = new EventManager();
