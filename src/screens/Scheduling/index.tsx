import React, {useState} from 'react';
import {useNavigation, CommonActions} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { 
    Calendar,
    DayProps,
    generateInterval,
    MarkedDateProps
} from '../../components/Calendar';

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
 Container,
 Header,
 Title,
 RentalPeriod,
 DateInfo,
 DateTitle,
 DateValue,
 Content,
 Footer,
} from './styles';



export function Scheduling(){
    const [lastSelectedDate, setlastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.dispatch(CommonActions.navigate('SchedulingDetails'));
    }
    function handleBack(){
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }
        setlastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
    }

return (
    <Container>
        <Header>
            <StatusBar 
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <BackButton onPress={handleBack} color={theme.colors.shape}/>
            <Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
            </Title>

            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected={false}></DateValue>
                </DateInfo>
                <ArrowSvg />

                <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue selected={false}></DateValue>
                </DateInfo>
                
                
            </RentalPeriod>
            
        </Header>


        <Content>
            <Calendar 
                markedDates={markedDates}
                onDayPress={handleChangeDate}
            
            />

        </Content>

        <Footer>
            <Button title="Confirmar" onPress={handleConfirmRental}/>
        </Footer>

    </Container>
    );
}