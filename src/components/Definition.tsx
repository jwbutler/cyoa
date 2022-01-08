import styles from './Definition.module.css';
import { parseMarkup } from '../utils/markup';
import UnsafeHTML from './UnsafeHTML';

type Props = {
  term: string,
  definition: string
}

const Definition = ({ term, definition }: Props) => (
  <div className={styles['definition']}>
    <div className={styles['definition-content']}>
      <UnsafeHTML>{parseMarkup(definition)}</UnsafeHTML>
    </div>
  </div>
);

export default Definition;
