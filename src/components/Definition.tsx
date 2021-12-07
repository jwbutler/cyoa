import './Definition.css';
import { parseMarkup } from '../utils/markup';
import UnsafeHTML from './UnsafeHTML';

type Props = {
  term: string,
  definition: string
}

const Definition = ({ term, definition }: Props) => (
  <div className="definition">
    <div className="definition-content">
      <UnsafeHTML>{parseMarkup(definition)}</UnsafeHTML>
    </div>
  </div>
);

export default Definition;
