'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { NextUIProvider } from '@nextui-org/react';
import { makeStore, AppStore } from '@/app/lib/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { WalletStandardProvider } from '@wallet-standard/react';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  const persistorRef = useRef<any>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    persistorRef.current = persistStore(storeRef.current);
  }

  const contextClass = {
    success: 'bg-blue-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
  };

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        <WalletStandardProvider>
          <NextUIProvider>
            {children}
            <ProgressBar
              height="2px"
              color="#05a4bb"
              options={{ showSpinner: false }}
              shallowRouting
            />
            <ToastContainer
              toastClassName={(context) =>
                contextClass[context?.type || 'default'] +
                ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mt-1 bg-ord-sky'
              }
              bodyClassName={() => 'text-sm font-white font-med block p-3 flex'}
            />
          </NextUIProvider>
        </WalletStandardProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
