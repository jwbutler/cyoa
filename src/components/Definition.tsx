import './Definition.css';

type Props = {
  term: string,
  definition: string
}

const Definition = ({ term, definition }: Props) => (
  <div className="definition">
    {definition}
  </div>
);

export default Definition;
