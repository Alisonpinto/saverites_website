import { Brain, FileStack, Zap, ShieldCheck } from 'lucide-react';
import styles from './WhySaverites.module.css';

const features = [
  {
    icon: <Brain size={32} />,
    title: "Remember More",
    description: "Keep memories organized forever."
  },
  {
    icon: <FileStack size={32} />,
    title: "Save Important Files",
    description: "Store documents and information securely."
  },
  {
    icon: <Zap size={32} />,
    title: "Quick Access",
    description: "Find saved content instantly."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Private and Secure",
    description: "Your memories remain protected."
  }
];

const WhySaverites = () => {
  return (
    <section className={`section ${styles.whySection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2 animate-fade-up">Why Saverites</h2>
          <p className="p-large animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Built for those who value their digital legacy.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.card} animate-fade-up`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className="h4">{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySaverites;
