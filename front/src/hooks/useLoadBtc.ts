import { useAppDispatch, useAppSelector } from 'app/hooks';
import { loadBtc } from 'features/currencySlice';
import { useEffect } from 'react';

export const useLoadBtc = () => {
  const dispatch = useAppDispatch();
  const { interval } = useAppSelector((state) => state.scan);
  const { btc } = useAppSelector((state) => state.currency);

  const fetchData = () => {
    if (btc.length === 0) {
      dispatch(loadBtc());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const normalizedInterval = interval * 60000;
    const intervalId = setInterval(fetchData, normalizedInterval);
    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);
};
