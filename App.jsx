import * as React from 'react';
import Onboard from './src/components/Onboard';
import HomeScreen from './src/components/HomeScreen';

export default function App() {
  const [showOnBoard, setShowOnBoard] = React.useState(true);

  const handleOnboardFinish = () => {
    setShowOnBoard(false);
  };

  return (
    <React.Fragment>
      {showOnBoard && <Onboard handleDone={handleOnboardFinish} />}
      {!showOnBoard && <HomeScreen />}
    </React.Fragment>
  );
}
