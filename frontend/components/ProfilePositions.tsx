import { DataTable } from 'react-native-paper';
import { prettifyMoney } from '../services/utils';
import { Text, View } from 'react-native';
import React from 'react';
import { Position } from '../types/types';

interface ProfilePositionsProps {
  positions: Position[] | undefined
}

export const ProfilePositions = ({positions}: ProfilePositionsProps) => {
  return (
    <View >
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Symbol</DataTable.Title>
        <DataTable.Title>Last Price</DataTable.Title>
        <DataTable.Title>Mkt Val / Qty</DataTable.Title>
        <DataTable.Title>Open P/L</DataTable.Title>
      </DataTable.Header>
      {positions?.map((position, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>{position.ticker}</DataTable.Cell>
          <DataTable.Cell>{prettifyMoney(position.cost)}</DataTable.Cell>
          <DataTable.Cell>
            <View className='flex flex-col'>
              <Text>
                {prettifyMoney(position.cost * position.quantity)}
              </Text>
              <Text>
                {position.quantity}
              </Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View className='flex flex-col'>
              <Text className={position.total_gain >= 0 ? 'text-[#02ad99]' : 'text-[#fe2b51]'}>
                {prettifyMoney(position.total_gain)}
              </Text>
              <Text className={position.total_gain >= 0 ? 'text-[#02ad99]' : 'text-[#fe2b51]'}>
                {position.total_gain_pct}%
              </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
</View>
)}