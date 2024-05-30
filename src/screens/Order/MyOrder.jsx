import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, H5, Button } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { XStack, YStack } from 'tamagui';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveOrderAction, payoutAction } from '../../app/Features/order/orderSlice';
import { useRoute } from '@react-navigation/native';

const OrdersList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { activeOrder, loading, error } = useSelector(state => state.order);
  const { userId } = route.params;

  const OrderListItem = ({ tripName, departureDate, returnDate, status, tripDetail, orderId }) => (
    <Card style={styles.card} backgroundColor={'white'} elevate="10" padding={10}>
      <YStack>
        <XStack style={{ alignItems: 'center' }} flex={2}>
          <MaterialCommunityIcons
            style={styles.icon}
            size={30}
            name="bag-checked"
          />
          <H5 style={styles.title}>
            {tripName}
          </H5>
        </XStack>
        <XStack flex={1} style={styles.details}>
          <Text>{departureDate}</Text>
          <Icon name="chevron-right" type="font-awesome" size={16} color="#000" />
          <Text>{returnDate}</Text>
        </XStack>
        <XStack style={{ justifyContent: 'space-around', marginTop: '10%' }}>
          <Text style={{ marginTop: 10, color: status === 'PAID' ? 'green' : 'green' }}>
            Active
          </Text>
          <Button themeInverse size="$3" onPress={() => { dispatch(payoutAction(orderId)); navigation.navigate("App") }}>
            Payout
          </Button>
        </XStack>
      </YStack>
    </Card>
  );

  useEffect(() => {
    dispatch(getActiveOrderAction(userId));
  }, [dispatch, userId]);

  const filteredOrders = activeOrder.filter(order => order !== null);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text>Error: {error}</Text>
        <Button onPress={() => dispatch(getActiveOrderAction(userId))}>
          Retry
        </Button>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Button onPress={() => navigation.goBack()}>
        Back
      </Button>
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderListItem
            tripName={item.trip.destination}
            departureDate={item.trip.departureDate}
            returnDate={item.trip.returnDate}
            status={item.status}
            tripDetail={item.trip}
            orderId={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  icon: {
    padding: 10,
    color: 'grey',
  },
  title: {
    textAlign: 'center',
  },
  details: {
    justifyContent: 'space-around',
    marginTop: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrdersList;
