import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSession } from '@clerk/clerk-expo';
import {
  ProfileNavigationProp,
  AuthNavigationProp,
} from '../../types/navigationTypes';
import { User } from '../../types/types';
import { getUserById } from '../../services/users';
import { copyTrades } from '../../services/copy';

function CopyTradesPage() {
  const { session } = useSession();
  const navigation = useNavigation<ProfileNavigationProp>();
  const authNavigation = useNavigation<AuthNavigationProp>();
  const [investmentAmount, setInvestmentAmount] = useState('1000');
  const [stopLossEnabled, setStopLossEnabled] = useState(false);
  const [stopLossAmount, setStopLossAmount] = useState('500');
  const [tradeAuthorizationRequired, setTradeAuthorizationRequired] =
    useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleSubmit = async () => {
    if (!user) {
      Alert.alert('Error', "User doesn't exist");
      return;
    }
    if (!session?.user.id) {
      authNavigation.navigate('Login');
      return;
    }
    
    try {
      await copyTrades(session?.user.id as string, user.username);
    } catch (error) {
      Alert.alert('Error', 'Failed to copy trades');
      return;
    }

    Alert.alert('Success', 'Trades copied successfully');
    navigation.navigate('Profile');
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById('');
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>@kevinkevindaliri</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.closeButton}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountInfo}>
        <Text style={styles.accountLabel}>ACCT 123456</Text>
        {/* <Image source={require('.png')} style={styles.arrowIcon} /> */}
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Investment Amount</Text>
        <TextInput
          style={styles.input}
          value={investmentAmount}
          onChangeText={setInvestmentAmount}
          keyboardType="numeric"
        />
        <Text style={styles.smallText}>
          This investment will proportionally copy this investor’s portfolio.
        </Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Set stop loss</Text>
        <Switch onValueChange={setStopLossEnabled} value={stopLossEnabled} />
      </View>
      {stopLossEnabled && (
        <View style={styles.input}>
          <Text style={styles.label}>Investment Falls Below</Text>
          <TextInput
            value={stopLossAmount}
            onChangeText={setStopLossAmount}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
      )}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Require trade authorization</Text>
        <Switch
          onValueChange={setTradeAuthorizationRequired}
          value={tradeAuthorizationRequired}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Copy Trades</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  username: {
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
  },
  accountInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 16,
  },
  accountLabel: {
    fontWeight: 'bold',
  },
  // potentially add arrowIcon styling if using an Image component
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  smallText: {
    color: '#757575',
    fontSize: 12,
  },
  switchContainer: {
    marginBottom: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CopyTradesPage;
