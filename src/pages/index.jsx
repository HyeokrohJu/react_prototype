import { useEffect } from 'react';
import useGithub from '@stores/github/hook';

function IndexPage() {
  const { loading, data, gitUser } = useGithub();
  useEffect(() => {
    gitUser('HyeokrohJu');
  }, [gitUser]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default IndexPage;
