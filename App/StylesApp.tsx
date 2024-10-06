import { StyleSheet } from 'react-native';
import { Isdark } from '../src/utils';


export const StylesApp = () => {
    const isdark = Isdark();

    return StyleSheet.create({
        styleSafeAreaView: {
            backgroundColor: isdark ? '#000000' : '#ffffff',
            minHeight: '100%',
            minWidth: '100%',
        },
        styleView: {
            minWidth: '100%',
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        styleText: {
            fontSize: 48,
        },
    });
};
