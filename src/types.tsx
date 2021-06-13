type Scene = {
  id: string,
  name: string,
  description?: string,
  actions: Action[]
}

type Action = {
  scene?: string,
  text: string,
  requires?: {
    items?: string[]
  },
  forbids?: {
    items?: string[]
  },
  adds?: {
    items?: string[]
  },
  removes?: {
    items?: string[]
  }
}

type Consumer<T> = (t: T) => void;

export type { Action, Consumer, Scene };
