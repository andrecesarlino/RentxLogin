import React from 'react';
import {
    Feather
} from '@expo/vector-icons';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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
 Acessories,
 RentalPeriod,
 CalendarIcon,
 DateInfo,
 DateTitle,
 DateValue,
 RentalPrice,
 RentalPriceLabel,
 RentalPriceDetails,
 RentalPriceQuota,
 RentalPriceTotal,
 Footer
} from './styles';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function SchedulingDetails(){
    const theme = useTheme();
return (
    <Container>
        <Header>
            <BackButton onPress={() => {}} />
        </Header>
        <CarImages>
            <ImageSlider 
            imagesUrl={['https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png']}
            />
         </CarImages>

         <Content>
             <Details>
                 <Description>                     
                     <Brand>Lamborghini</Brand>
                     <Name>Hurracan</Name>
                 </Description>
                 <Rent>
                     <Period>Ao dia</Period>
                     <Price>R$ 580</Price>
                 </Rent>
             </Details>

            <Acessories>
                <Accessory name="380Km/h" icon={speedSvg}/>
                <Accessory name="3.2s" icon={accelerationSvg}/>
                <Accessory name="800 HP" icon={forceSvg}/>
                <Accessory name="Auto" icon={exchangeSvg}/>                
                <Accessory name="Gasolina" icon={gasolineSvg}/>
                <Accessory name="2 pessoas" icon={peopleSvg}/>
            </Acessories>

            <RentalPeriod>


                <CalendarIcon>
                    <Feather 
                        name="calendar"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                    />
                </CalendarIcon>
            
            <DateInfo>
                <DateTitle>DE</DateTitle>
                <DateValue>18/06/2021</DateValue>
            </DateInfo>
            <Feather 
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.text}
            />
            
            <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue>23/06/2021</DateValue>
            </DateInfo>
            <Feather 
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.text}
            />
            </RentalPeriod>

            <RentalPrice>
                <RentalPriceLabel>TOTAL</RentalPriceLabel>
                <RentalPriceDetails>
                    <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                    <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                </RentalPriceDetails>
            </RentalPrice>
         </Content>

         <Footer>
             <Button title="Confirmar" onPress={() => {}}/>
         </Footer>

               
    </Container>
    );
}