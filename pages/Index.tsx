import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useWalletConnectClient } from "./../contexts/ClientContext";
import { DEFAULT_TEST_CHAINS } from '../constants';

const Index = () => {
  const {
    client,
    session,
    disconnect,
    chain,
    accounts,
    balances,
    chainData,
    isFetchingBalances,
    isInitializing,
    connect,
    web3Provider
  } = useWalletConnectClient();

  function handleConnect() {
    connect(DEFAULT_TEST_CHAINS[4]);
  }

  const handleDisconnect = () => {
    disconnect();
  }

  const fetchBalance = () => {
    console.log("Balance:",balances)
  }

  
  return (
    <View style={{margin: '10%'}}>
      <Button title='Connect' onPress={handleConnect} disabled={isInitializing} />
      <Button title='Disconnect' onPress={handleDisconnect} disabled={!session} />
      <Button title= "Get Balance" onPress={fetchBalance} /> 
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})