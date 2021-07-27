import { useCallback, useState } from 'react';

const useForceUpdate = () => {

	const [, set] = useState<number>(0);

	const forceUpdate = useCallback(() => {
		set((v) => v + 1);
	}, []);

	return forceUpdate;

};

export default useForceUpdate;
