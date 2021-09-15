import React from 'react';
import {Feather} from '@expo/vector-icons';

import { Calendar as CustomCalendar,
LocaleConfig } from 'react-native-calendars';

import { useTheme } from 'styled-components';
import { Inter_100Thin } from '@expo-google-fonts/inter';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    monthNamesShort: ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
    const theme = useTheme();
    return (
    <CustomCalendar 
        renderArrow={
        (direction) => 
        <Feather 
            size={24}
            color={theme.colors.text}
            name={direction == 'left' ? "chevron-left" : "chevron-right"}
        />
        }

        headerStyle={{
            backgroundColor: theme.colors.background_secondary,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.text_detail,
            paddingBottom: 10,
            marginBottom: 10
        }}

        theme={{
            textDayFontFamily: theme.fonts.primary_400,
            textDayHeaderFontFamily: theme.fonts.primary_500,
            textDayHeaderFontSize: 10,
            textMonthFontFamily: theme.fonts.secondary_500,
            textMonthFontSize: 20,
            monthTextColor: theme.colors.title,
            arrowStyle: {
                marginHorizontal: -15
            }
        }}

        firstDay={1}

        minDate={new Date()}
    />
    );
}