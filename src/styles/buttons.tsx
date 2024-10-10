import { StyleSheet, Platform } from 'react-native';
import { Isdark } from '../utils';


export const StylesButton = () => {
    const isdark = Isdark();

    return (
        StyleSheet.create({
            buttonPressable: {
                backgroundColor:
                Platform.OS === 'ios' ? 'rgba(196, 196, 196, 0)' : 'rgb(0, 93, 187)',
                borderRadius: 100 * 0.12,
                minWidth: 80,
                position: 'absolute',
                right: 0,
                bottom: 100,
            },

            textButton: {
                color: Platform.OS === 'ios' ?
                'rgb(39, 143, 255)' :
                'rgb(255, 255, 255)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                // fontSize: 30,
            },

            buttonPressed: {
                backgroundColor: Platform.OS === 'ios' && isdark ? 'rgba(255, 255, 255, 0)' : 'rgb(0, 75, 149)',
                borderRadius: 100 * 0.12,
                minWidth: 80,
            },
        })
    );
};

