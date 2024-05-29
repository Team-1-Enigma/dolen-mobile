import React, { useEffect } from 'react';
import { Text, View, Linking, ActivityIndicator } from 'react-native';
import { Button, H2, YStack } from 'tamagui';
import { useSelector, useDispatch } from 'react-redux';
import { getPaymentDataAction, getPaymentStatusAction } from '../../app/Features/order/orderSlice';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { clearPaymentStatus } from '../../app/Features/order/orderSlice';
const OrderConfirmation = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const navigation = useNavigation();

    const paymentData = useSelector((state) => state.order.paymentData);
    const paymentStatus = useSelector((state) => state.order.paymentStatus);
    const orderId = useSelector((state) => state.order.orderId);

    useEffect(() => {
        // Fetch payment data
        dispatch(getPaymentDataAction(orderId));
    }, [dispatch, orderId]);

    useEffect(() => {
        // Fetch payment status in an interval
        const interval = setInterval(() => {
            dispatch(getPaymentStatusAction(orderId));
        }, 5000); // Pengecekan setiap 5 detik, sesuaikan dengan kebutuhan

        return () => clearInterval(interval);
    }, [dispatch, orderId]);

    useEffect(() => {
        // Check if payment status is settled and navigate
        if (paymentStatus && paymentStatus.transaction_status === "settlement") {
            dispatch(clearPaymentStatus())
            navigation.navigate("App");
        }
    }, [paymentStatus, navigation]);

    const handleOpenPaymentLink = () => {
        const paymentUrl = paymentData && paymentData.paymentLink;
        if (paymentUrl) {
            Linking.openURL(paymentUrl);
        }
    };

    if (!paymentData) {
        return <ActivityIndicator size="large" color="#07C9F0" />;
    }

    return (
        <YStack padding={20}>
            <H2>Order Confirmation</H2>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18 }}>Detail Trip:</Text>
                <Text style={{ fontSize: 16 }}>Nama Trip: Trip ke Bromo</Text>
                <Text style={{ fontSize: 16 }}>Tanggal Berangkat: 2024-07-20</Text>
                <Text style={{ fontSize: 16 }}>Tanggal Kembali: 2024-07-22</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18 }}>Detail Pemesan:</Text>
                <Text style={{ fontSize: 16 }}>Nama Pemesan: Ahmad</Text>
                <Text style={{ fontSize: 16 }}>Email Pemesan: ahmad@gmail.com</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18 }}>Detail Peserta:</Text>
                <Text style={{ fontSize: 16 }}>Nama Peserta 1: Ahmad</Text>
                <Text style={{ fontSize: 16 }}>Kontak Peserta 1: 021930123</Text>
                <Text style={{ fontSize: 16 }}>Nama Peserta 2: Ari</Text>
                <Text style={{ fontSize: 16 }}>Kontak Peserta 2: 3123</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                {paymentData.status === "PAID" ? (
                    <Text style={{ fontSize: 18, color: 'green' }}>Pembayaran Selesai</Text>
                ) : (
                    <ActivityIndicator size="large" color="#07C9F0" />
                )}
            </View>
            <View style={{ marginTop: 20 }}>
                <Button
                    backgroundColor={"#07C9F0"}
                    color="white"
                    onPress={handleOpenPaymentLink}
                >
                    Bayar Sekarang
                </Button>
            </View>
        </YStack>
    );
};

export default OrderConfirmation;
