import React, { useState } from "react";
import { Card, CardContent, Button, TextField, MenuItem } from "@mui/material";

const App = () => {
  const [personalData, setPersonalData] = useState({
    age: "",
    gender: "",
  });
  const [testInputs, setTestInputs] = useState({
    runTime: "",
    pushUps: "",
    sitUps: "",
    swimTime: "",
  });
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const ageCategory = personalData.age >= 40 ? "40+" : "<40";
    const runScore = testInputs.runTime <= 9 ? 100 : testInputs.runTime <= 12 ? 70 : 40;
    const pushUpScore = testInputs.pushUps >= 30 ? 100 : testInputs.pushUps >= 15 ? 70 : 40;
    const sitUpScore = testInputs.sitUps >= 50 ? 100 : testInputs.sitUps >= 25 ? 70 : 40;
    const swimScore = testInputs.swimTime <= 18 ? 100 : testInputs.swimTime <= 25 ? 70 : 40;

    const overallScore = (runScore + pushUpScore + sitUpScore + swimScore) / 4;
    let qualitativeResult = "";

    if (overallScore >= 92) {
      qualitativeResult = "EXCEPCIONAL";
    } else if (overallScore >= 72) {
      qualitativeResult = "SOBRE LO NORMAL";
    } else if (overallScore >= 52) {
      qualitativeResult = "NORMAL";
    } else if (overallScore >= 32) {
      qualitativeResult = "DEBAJO DE LO NORMAL";
    } else {
      qualitativeResult = "DEFICIENTE";
    }

    setResult(
      `Categoría: ${ageCategory}, Puntaje total: ${overallScore.toFixed(2)}, Resultado: ${qualitativeResult}`
    );
  };

  const handleInputChange = (e, field, type) => {
    const value = type === "number" ? parseFloat(e.target.value) : e.target.value;
    if (field in personalData) {
      setPersonalData({ ...personalData, [field]: value });
    } else if (field in testInputs) {
      setTestInputs({ ...testInputs, [field]: value });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pruebas Físicas - Calculadora de Resultados</h1>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Datos Personales</h2>
          <div className="mb-2">
            <TextField
              label="Edad"
              type="number"
              fullWidth
              value={personalData.age}
              onChange={(e) => handleInputChange(e, "age", "number")}
              placeholder="Ingrese su edad"
              margin="normal"
            />
          </div>
          <div className="mb-2">
            <TextField
              label="Género"
              select
              fullWidth
              value={personalData.gender}
              onChange={(e) => handleInputChange(e, "gender")}
              margin="normal"
            >
              <MenuItem value="">Seleccione</MenuItem>
              <MenuItem value="male">Masculino</MenuItem>
              <MenuItem value="female">Femenino</MenuItem>
            </TextField>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Resultados de Pruebas</h2>
          <div className="mb-2">
            <TextField
              label="Tiempo en carrera de 2400 metros (min)"
              type="number"
              fullWidth
              value={testInputs.runTime}
              onChange={(e) => handleInputChange(e, "runTime", "number")}
              placeholder="Ingrese el tiempo"
              margin="normal"
            />
          </div>
          <div className="mb-2">
            <TextField
              label="Flexiones de brazos"
              type="number"
              fullWidth
              value={testInputs.pushUps}
              onChange={(e) => handleInputChange(e, "pushUps", "number")}
              placeholder="Ingrese el número"
              margin="normal"
            />
          </div>
          <div className="mb-2">
            <TextField
              label="Flexiones abdominales"
              type="number"
              fullWidth
              value={testInputs.sitUps}
              onChange={(e) => handleInputChange(e, "sitUps", "number")}
              placeholder="Ingrese el número"
              margin="normal"
            />
          </div>
          <div className="mb-2">
            <TextField
              label="Tiempo en natación (min)"
              type="number"
              fullWidth
              value={testInputs.swimTime}
              onChange={(e) => handleInputChange(e, "swimTime", "number")}
              placeholder="Ingrese el tiempo"
              margin="normal"
            />
          </div>
        </CardContent>
      </Card>

      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        onClick={calculateResult}
        style={{ marginTop: "16px" }}
      >
        Calcular Resultado
      </Button>

      {result && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <h3 className="text-lg font-bold">Resultado:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;
