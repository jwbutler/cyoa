import Button from './Button';
import Action from '../types/Action';
import Controller from '../types/Controller';

type Props = {
  action: Action,
  controller: Controller
};

const colors: Record<Action.Type, Button.Type> = {
  [Action.Type.SCENE]: 'white',
  [Action.Type.ACTION]: 'white_blue',
  [Action.Type.ITEM]: 'white_blue'
};

/**
 * Conditionally displays a {@link Button}, based on a particular {@link Action}, with an appropriate onClick handler
 * that executes the appropriate logic defined by the action.
 */
const ActionButton = ({ action, controller }: Props) => {
  const type = colors[action.type];
  return (
    <Button
      type={type}
      size="medium"
      onClick={() => Action.execute(action, controller)}
    >
      {action.text}
    </Button>
  );
};

export default ActionButton;
