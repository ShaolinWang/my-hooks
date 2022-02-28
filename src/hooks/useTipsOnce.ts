/**
 * 用户引导 仅出现1次
 */
import { useCallback, useState } from 'react';

export default function (cacheKey: string): [boolean, () => void] {

	const getDefaultVisible = useCallback(() => {
		return localStorage.getItem(cacheKey) === null;
	}, [cacheKey]);

	const [visible, setVisible] = useState<boolean>(getDefaultVisible);

	const setClosedForever = useCallback(() => {
		setVisible(false);
		localStorage.setItem(cacheKey, 'esp-forever');
	}, [cacheKey]);

	return [visible, setClosedForever];
};
