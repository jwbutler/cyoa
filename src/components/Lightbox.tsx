import Button from './Button';
import { Consumer } from '../types/types';
import styles from './Lightbox.module.css';

type Props = {
  title?: string,
  body?: string,
  x?: boolean,
  ok?: boolean,
  cancel?: boolean,
  handleClose: Consumer<boolean>
};

const Lightbox = ({
  title,
  body,
  x = true,
  ok = true,
  cancel = false,
  handleClose
}: Props) => (
  <>
    {/* Don't nest this inside the lightbox for CSS reasons */}
    <div className={styles.background} />
    <div className={styles.lightbox}>
      {x && (
        <div className={styles.x} onClick={() => handleClose(false)}>×</div>
      )}
      <h2 className={styles.title}>
        {title || ' '}
      </h2>
      {body && (
        <p className={styles.body}>
          {body}
        </p>
      )}
      {(ok || cancel) && (
        <>
          {ok && (
            <Button type="white" size="medium" onClick={() => handleClose(true)}>
              OK
            </Button>
          )}
          {cancel && (
            <Button type="white" size="medium" onClick={() => handleClose(false)}>
              Cancel
            </Button>
          )}
        </>
      )}
    </div>
  </>
);

export default Lightbox;
