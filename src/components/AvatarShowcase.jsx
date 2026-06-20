import { useState } from 'react';
import styles from './AvatarShowcase.module.css';

const AvatarShowcase = () => {
  const [seed, setSeed] = useState('Memoria');

  return (
    <section className={`section ${styles.avatarSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="h2 animate-fade-up">Your Unique Identity</h2>
          <p className="p-large animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Memoria uses beautiful, deterministically generated avatars. Type any name below to see it in action, matching exactly what you'll get in the app.
          </p>
          
          <div className={`animate-fade-up ${styles.inputWrapper}`} style={{ animationDelay: '0.2s' }}>
            <input 
              type="text" 
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              className={styles.input}
              placeholder="Type your name..."
            />
          </div>
        </div>

        <div className={`animate-fade-up ${styles.visual}`} style={{ animationDelay: '0.3s' }}>
          <div className={`${styles.avatarContainer} glass-effect`}>
            <img 
              src={`https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(seed)}&backgroundColor=transparent`} 
              alt="Generated Avatar" 
              className={styles.mainAvatar}
            />
          </div>
          
          {/* Floating examples */}
          <div className={styles.floatingAvatars}>
            {['Alex', 'Sam', 'Jordan', 'Taylor'].map((name, i) => (
              <img 
                key={name}
                src={`https://api.dicebear.com/9.x/micah/svg?seed=${name}&backgroundColor=transparent`}
                alt={`${name} Avatar`}
                className={`${styles.floatingAvatar} ${styles[`float${i+1}`]}`}
                onClick={() => setSeed(name)}
                title={`Click to try "${name}"`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarShowcase;
