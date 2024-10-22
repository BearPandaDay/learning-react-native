import { StyleSheet } from 'react-native';
import { Isdark } from '../src/utils';


export const StylesApp = () => {
    const isdark = Isdark();

    return StyleSheet.create({
        styleSafeAreaView: {
            backgroundColor: isdark ? '#033e37' : '#a9e6f5',
            // minHeight: '100%',
            // minWidth: '100%',
            flex: 1,
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
            color: isdark ? '#232323' : '#e6e6e6',
        },
    });
};
