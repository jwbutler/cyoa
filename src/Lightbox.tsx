import Button from './Button';
import './Lightbox.css';
import { Consumer } from './types';

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
    <div className="lightbox-background" />
    <div className="lightbox">
      {x && (
        <div className="lightbox-x" onClick={() => handleClose(false)}>×</div>
      )}
      <h2 className="lightbox-title">
        {title || ' '}
      </h2>
      {body && (
        <p className="lightbox-body">
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
