import { useEffect, useState } from 'react';
import Scene from '../types/Scene';
import Button from './Button';
import styles from './DebugPanel.module.css';

type Props = {
  scenes: Scene[],
  initialSceneId: string,
  save: (text: string) => void
};

const DebugPanel = ({ scenes, initialSceneId, save }: Props) => {
  const [sceneId, setSceneId] = useState<string | null>(initialSceneId);
  const [scene, setScene] = useState<Scene | null>(null);

  // @ts-ignore
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (sceneId) {
      const scene = scenes.find(it => it.id === sceneId);
      if (scene) {
        setScene(scene);
      }
    }
  }, [scenes, sceneId]);

  useEffect(() => {
    if (scene) {
      setText(JSON.stringify(scene, null, 2)); // pretty-print with some spacing
    }
  }, [scene]);

  const handleSave = (currentScene: string) => {
    if (!scene) return;

    const updatedScenes = [
      ...scenes.slice(0, scenes.indexOf(scene)),
      JSON.parse(currentScene),
      ...scenes.slice(scenes.indexOf(scene) + 1, scenes.length)
    ];

    save(JSON.stringify(updatedScenes, null, 2));
  };

  return (
    <div className={styles.debug}>
      <div className={styles.scenes}>
        {scenes.map(scene => (
          <Button
            type="white"
            size="small"
            fullWidth
            key={scene.id}
            onClick={() => setSceneId(scene.id)}
          >
            {scene.id}
          </Button>
        ))}
      </div>
      <div className={styles.editor}>
        <textarea
          className={styles.textarea}
          value={text || undefined}
          onChange={e => setText(e.target.value)}
          disabled={!scene}
          spellCheck={false}
        />
        <Button
          type="blue"
          size="medium"
          onClick={() => text && handleSave(text)}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default DebugPanel;
