import React from 'react';
import {useNavigation, CommonActions, useRoute} from '@react-navigation/native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { CarDTO } from '../../dtos/CarDTO';

import {
 Container,
 Header,
 CarImages,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 About,
 Accessories,
 Footer
} from './styles';

interface Params {
    car: CarDTO;
}

import { Button } from '../../components/Button';


export function CarDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const {car} = route.params as Params;

    function handleConfirmRental(){
        navigation.dispatch(CommonActions.navigate('Scheduling', {car}));
    }
    function handleBack(){
        navigation.goBack();
    }

return (
    <Container>
        
        <Header>
            <BackButton onPress={handleBack} />
        </Header>
        <CarImages>
            <ImageSlider 
            imagesUrl={car.photos}
            />
         </CarImages>

         <Content>
             <Details>
                 <Description>                     
                     <Brand>{car.brand}</Brand>
                     <Name>{car.name}</Name>
                 </Description>
                 <Rent>
                     <Period>{car.rent.period}</Period>
                     <Price>R$ {car.rent.price}</Price>
                 </Rent>
             </Details>

            <Accessories>
                {
                    car.accessories.map(accessory => (
                        <Accessory 
                            key={accessory.type}
                            name={accessory.name}
                            icon={getAccessoryIcon(accessory.type)}
                        />
                    ))
                }
             </Accessories>

             <About>{car.about}</About>  

         </Content>

         <Footer>
             <Button title="Escolher per??odo do aluguel" onPress={handleConfirmRental}/>
         </Footer>

               
    </Container>
    );
}