import Button from './Button';
import './Lightbox.css';

type Props = {
  title?: string,
  body?: string,
  x?: boolean,
  ok?: boolean,
  handleClose: () => void
};

const Lightbox = ({
  title,
  body,
  x = true,
  ok = true,
  handleClose
}: Props) => (
  <>
    {/* Don't nest this inside the lightbox for CSS reasons */}
    <div className="lightbox-background" />
    <div className="lightbox">
      {x && (
        <div className="lightbox-x" onClick={handleClose}>×</div>
      )}
      <h2 className="lightbox-title">
        {title || ' '}
      </h2>
      {body && (
        <p className="lightbox-body">
          {body}
        </p>
      )}
      {ok && (
        <Button type="white" size="medium" onClick={handleClose}>
          OK
        </Button>
      )}
    </div>
  </>
);

export default Lightbox;
