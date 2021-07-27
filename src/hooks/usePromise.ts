import { useCallback, useEffect, useRef } from 'react';

const usePromise = () => {

	const promiseRef = useRef<Promise<void>>();
	const resovleRef = useRef<(value: void | PromiseLike<void>) => void>();
	const rejectRef = useRef<(reason?: string) => void>();

	const reset = useCallback(() => {
		promiseRef.current = new Promise<void>((resovle, reject) => {
			resovleRef.current = resovle;
			rejectRef.current = reject;
		});
	}, []);

	useEffect(() => {
		reset();
	}, [reset]);

	return { resovleRef, rejectRef, promiseRef, reset };

};

export default usePromise;
