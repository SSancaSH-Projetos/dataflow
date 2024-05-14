import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GerenciarTurmas from "../Telas/GerenciarTurmas";
import DashboardProfessor from "../Telas/DashboardProfessor";
import AdicionarTurmas2 from "../Telas/AdicionarTurmas2";
import GerenciarSA from "../Telas/GerenciarSA";
import GerenciarUC from "../Telas/GerenciarUC";
import GerenciarCursos from "../Telas/GerenciarCursos";
import GerarRelatorio from "../Telas/GerarRelatorio";
import CadastroUC from "../Telas/CadastroUC";
import CadastroCapacidades from "../Telas/CadastroCapacidades";
import AdicionarSA from "../Telas/AdicionarSA";
import AdicionarTurma from "../Telas/AdicionarTurma";
import AdicionarCurso from "../Telas/AdicionarCurso";
import AdicionarCriterios from "../Telas/AdicionarCriterios";
import IniciarAvCapacidade from "../Telas/IniciarAvCapacidade";
import CadastroAlunos from "../Telas/CadastroAlunos";
import EditarSA from "../Telas/EditarSA";
import EditarUC from "../Telas/EditarUC";
import EditarCurso from "../Telas/EditarCurso";
import EditarTurma from "../Telas/EditarTurma";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DashboardProfessor"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="DashboardProfessor"
          component={DashboardProfessor}
        />

        <Stack.Screen name="AdicionarTurmas2" component={AdicionarTurmas2} />
        <Stack.Screen name="GerenciarTurmas" component={GerenciarTurmas} />
        <Stack.Screen name="GerenciarSA" component={GerenciarSA} />
        <Stack.Screen name="GerenciarUC" component={GerenciarUC} />
        <Stack.Screen name="GerarRelatorio" component={GerarRelatorio} />
        <Stack.Screen name="AdicionarSA" component={AdicionarSA} />
        <Stack.Screen name="CadastroUC" component={CadastroUC} />
        <Stack.Screen
          name="CadastroCapacidades"
          component={CadastroCapacidades}
        />
        <Stack.Screen name="AdicionarTurma" component={AdicionarTurma} />
        <Stack.Screen name="GerenciarCursos" component={GerenciarCursos} />
        <Stack.Screen name=" AdicionarCurso" component={AdicionarCurso} />
        <Stack.Screen
          name="AdicionarCriterios"
          component={AdicionarCriterios}
        />
        <Stack.Screen
          name="IniciarAvCapacidade"
          component={IniciarAvCapacidade}
        />
        <Stack.Screen name="CadastroAlunos" component={CadastroAlunos} />
        <Stack.Screen name="EditarSA" component={EditarSA} />
        <Stack.Screen name="EditarUC" component={EditarUC} />
        <Stack.Screen name="EditarCurso" component={EditarCurso} />
        <Stack.Screen name="AdicionarCurso" component={AdicionarCurso} />
        <Stack.Screen name="EditarTurma" component={EditarTurma} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
