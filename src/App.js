import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SysAdmLayout from '@components/Layout/SysAdmLayout';

import FrontRoutes from './routes/front-routes';

function App() {
  const location = useLocation();
  const [sysAdmFlag, setSysAdmFlag] = useState(false);
  useEffect(() => {
    if (location.pathname.indexOf('/sysadm') > -1) {
      setSysAdmFlag(true);
    }
  }, [location]);

  return (
    <div>
      {sysAdmFlag ? (
        <SysAdmLayout>test</SysAdmLayout>
      ) : (
        <Suspense fallback={<div>loading</div>}>
          <FrontRoutes />
        </Suspense>
      )}
    </div>
  );
}

export default App;
