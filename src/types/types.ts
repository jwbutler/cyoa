type Consumer<T> = (t: T) => void;
type Supplier<T> = () => T;

export type {
  Consumer,
  Supplier
};
