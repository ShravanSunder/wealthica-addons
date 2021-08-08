type EventType = 'earning' | 'ex-dividend' | 'pay-dividend' | 'record-dividend';

type Event = {
  type: EventType;
  date: string;
};

export type Position = {
  name: string;
  symbol: string;
  ticker: string;
  type: string;
  events: Event[];
};

export type Color = 'white' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'orange' | 'indigo';

export type Timeline = 'month' | 'week';