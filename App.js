import { StatusBar } from 'expo-status-bar';
import React from 'react';

import ClientsListPage from './src/pages/ClientsListPage';

export default function App() {
  return (
    <>
      <ClientsListPage />
      <StatusBar style="auto" />
    </>
  );
}
