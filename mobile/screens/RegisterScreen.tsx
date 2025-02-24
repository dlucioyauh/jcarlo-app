// screens/RegisterScreen.tsx
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
}

export default function RegisterScreen({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aqui você pode salvar o usuário ou fazer outra ação
    navigation.navigate('Login');  // Apenas exemplo de navegação
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <ScrollView>
        <React.Fragment>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
            rules={{ required: 'Campo obrigatório' }}
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
            rules={{ required: 'Campo obrigatório' }}
          />
        </React.Fragment>

        {errors.password && typeof errors.password.message === 'string' && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
