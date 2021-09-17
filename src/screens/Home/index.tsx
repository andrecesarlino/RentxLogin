import React, {useEffect, useState} from 'react';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import {api} from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';
import { Car } from '../../components/Car';



import {
 Container,
 Header,
 HeaderContent,
 TotalCars,
 CarList
} from './styles';

export function Home(){
    const [cars,setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const carDataOne = {
        brand: 'AUDI',
        name: 'RS 5 Coupé',
        rent: {
            period: 'Ao dia',
            price: 120,
        },
        thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png',
    }

    function handleCarDetails(){
        navigation.dispatch(CommonActions.navigate('CarDetails'));
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCars();
    },[]);

return (
    <Container>
        <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        <Header>
            <HeaderContent>
                <Logo 
                    width={RFValue(108)}
                    height={RFValue(12)}
                />

                <TotalCars>
                    Total de 12 Carros
                </TotalCars>
            </HeaderContent>
        </Header>

        <CarList
            data={cars}
            keyExtractor={item => String(item)}
            renderItem={({item}) => 
            <Car data={carDataOne} onPress={handleCarDetails}/>
        }
        />
    </Container>
    );
}