import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSession } from '@clerk/clerk-expo';
import { useDispatch } from 'react-redux';
import {
  ProfileNavigationProp,
  AuthNavigationProp,
} from '../../types/navigationTypes';
import { CopyRouteParams } from '../../types/types';
import { copyTrades } from '../../services/copy';
import { updatePortfolio } from '../../reducers/portfolio/portfolioReducer';

function CopyTradesPage() {
  const dispatch = useDispatch();
  const { session } = useSession();
  const navigation = useNavigation<ProfileNavigationProp>();
  const authNavigation = useNavigation<AuthNavigationProp>();
  const [investmentAmount, setInvestmentAmount] = useState('1000');
  const [stopLossEnabled, setStopLossEnabled] = useState(false);
  const [stopLossAmount, setStopLossAmount] = useState('500');
  const [tradeAuthorizationRequired, setTradeAuthorizationRequired] =
    useState(false);
  const route = useRoute();
  const user = (route.params as CopyRouteParams)?.user;

  const handleSubmit = async () => {
    if (!session?.user.id) {
      authNavigation.navigate('Login');
      return;
    }

    try {
      const copiedPortfolio = await copyTrades(session?.user.id as string, user?.id);
      dispatch(updatePortfolio(copiedPortfolio));
    } catch (error) {
      Alert.alert('Error', 'Failed to copy trades');
      return;
    }

    Alert.alert('Success', 'Trades copied successfully');
    navigation.navigate('FollowerProfile', { user });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.header}>
          <Text style={styles.username}>
            @{user?.username || 'kevinkevindaliri'}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.closeButton}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.accountInfo}>
          <Image
            source={require('../../assets/robinhood_svgrepo.com.png')}
            style={styles.accountLogo}
          />
          <Text style={styles.accountLabel}>ACCT123456</Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.boldLabel}>Investment Amount</Text>
          <TextInput
            keyboardType="numeric"
            value={`$${investmentAmount}`}
            onChangeText={text => {
              if (text.startsWith('$')) {
                text = text.slice(1);
              }
              text = text.replace(/[^0-9]/g, '');
              setInvestmentAmount(text);
            }}
            style={styles.input}
          />
          <Text style={styles.smallText}>
            This investment will proportionally copy this investor’s portfolio.
          </Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            onValueChange={setStopLossEnabled}
            value={stopLossEnabled}
            trackColor={{ false: '#E0E0E0', true: '#ebf8f7' }}
            thumbColor={stopLossEnabled ? '#02AD98' : '#E0E0E0'}
            style={styles.switch}
          />
          <Text style={styles.switchLabel}>Set stop loss</Text>
        </View>
        {stopLossEnabled && (
          <View style={styles.stopLossContainer}>
            <Text style={styles.label}>Investment Falls Below</Text>
            <TextInput
              keyboardType="numeric"
              value={`$${stopLossAmount}`}
              onChangeText={text => {
                if (text.startsWith('$')) {
                  text = text.slice(1);
                }
                text = text.replace(/[^0-9]/g, '');
                setStopLossAmount(text);
              }}
              style={styles.input}
            />
          </View>
        )}
        <View style={styles.switchContainer}>
          <Switch
            onValueChange={setTradeAuthorizationRequired}
            value={tradeAuthorizationRequired}
            trackColor={{ false: '#E0E0E0', true: '#ebf8f7' }}
            thumbColor={tradeAuthorizationRequired ? '#02AD98' : '#E0E0E0'}
            style={styles.switch}
          />
          <Text style={styles.switchLabel}>Require trade authorization</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Copy Trades</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountLogo: {
    width: 32,
    height: 32,
    marginRight: 14,
  },
  formWrapper: {
    maxWidth: '95%',
    paddingLeft: 8,
  },
  centerContainer: {
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
    paddingLeft: 8,
  },
  buttonContainer: {
    marginBottom: '5%',
  },
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  username: {
    fontWeight: '400',
  },
  closeButton: {
    fontSize: 32,
    color: 'gray',
  },
  accountInfo: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 14,
    backgroundColor: '#f2fcf3',
    borderRadius: 16,
    marginBottom: 16,
  },
  accountLabel: {
    fontWeight: 'normal',
    color: '#929c93',
  },
  // potentially add arrowIcon styling if using an Image component
  inputGroup: {
    marginBottom: 16,
    paddingTop: 16,
  },
  boldLabel: {
    fontWeight: '400',
    marginBottom: 8,
    fontSize: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: '200',
    fontSize: 16,
  },
  switchLabel: {
    paddingLeft: 12,
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    padding: 12,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 24,
    borderRadius: 18,
    marginBottom: 8,
    color: '#757575',
  },
  stopLossContainer: {
    paddingBottom: 12,
    marginBottom: 8,
  },
  smallText: {
    color: '#757575',
    fontSize: 12,
    paddingTop: 8,
    paddingBottom: 16,
  },
  switchContainer: {
    marginBottom: 24,
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#02AD98',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CopyTradesPage;
