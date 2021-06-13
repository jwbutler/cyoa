import Button from './Button';
import Controller from './Controller';
import type { Action } from './types';

type Props = {
  action: Action,
  controller: Controller
};

/**
 * Conditionally displays a {@link Button}, based on a particular {@link Action}, with an appropriate onClick handler
 * that executes the appropriate logic defined by the action.
 */
const ActionButton = ({ action, controller }: Props) => {
  const isVisible = () => {
    const { inventory } = controller;
    if (action.requires) {
      if (action.requires.items) {
        if (!action.requires.items.every(item => inventory.includes(item))) {
          return false;
        }
      }
    }
    if (action.forbids) {
      if (action.forbids.items) {
        if (action.forbids.items.find(item => inventory.includes(item))) {
          return false;
        }
      }
    }
    return true;
  }

  const onClick = () => {
    const { adds, removes, scene } = action;
    const { inventory, setInventory, setSceneId } = controller;
    if (scene) {
      setSceneId(scene);
    }
    if (adds) {
      const { items } = adds;
      if (items) {
        // TODO: add distinct().  Doesn't matter since remove() will remove the duplicates
        const updatedInventory = [...inventory, ...items]
        setInventory(updatedInventory);
      }
    }
    if (removes) {
      const { items } = removes;
      if (items) {
        // TODO: add distinct()
        const updatedInventory = inventory.filter(item => items && !items.includes(item));
        setInventory(updatedInventory);
      }
    }
  };

  if (isVisible()) {
    return (
      <Button
        type="white"
        size="medium"
        onClick={onClick}
      >
        {action.text}
      </Button>
    );
  }

  return null;
}

export default ActionButton;
