import { AsyncStorage } from 'react-native';

const deviceStorage = {
    
    async saveKey(key, valueToSave) {
        try {
            await AsyncStorage.setItem(key, valueToSave);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async loadJWT() {
        try {
            const value = await AsyncStorage.getItem('JWT_TOKEN');
            if (value !== null) {
                this.setState({
                    jwt: value,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async deleteJWT() {
        try {
            await AsyncStorage.removeItem('JWT_TOKEN')
                .then(
                    () => {
                        this.setState({
                            jwt: ''
                        })
                    }
                );
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async loadUser() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('USER'));
            if (value !== null) {
                this.setState({
                    user: value,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async deleteUser() {
        try {
            await AsyncStorage.removeItem('USER')
                .then(
                    () => {
                        this.setState({
                            jwt: ''
                        })
                    }
                );
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
};

export default deviceStorage;