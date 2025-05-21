# FullChamba 📱

Plataforma móvil desarrollada con **React Native + Expo**, orientada a conectar estudiantes con empresas mediante retos técnicos. Este repositorio contiene la versión frontend móvil de la aplicación.

---

## 🚀 Tecnologías utilizadas

- **Expo** (CLI)
- **React Native**
- **React Navigation**
- **dotenv** para variables de entorno
- Estructura modular y profesional basada en carpetas

---

## 📁 Estructura del proyecto

```bash
FullChamba/
│
├── .env                # Variables de entorno (no subir a Git)
├── .env.example        # Plantilla para crear tu propio .env
├── .gitignore          # Archivos ignorados por Git
├── App.js              # Entrada principal (reexporta desde src/)
├── babel.config.js     # Configuración de Babel con soporte @env
├── index.js            # Entry point para React Native
│
└── src/                # Código fuente principal
    ├── api/            # Lógica de conexión al backend (fetch/axios)
    ├── components/     # Componentes reutilizables (botones, headers, etc.)
    ├── constants/      # Constantes globales (colores, etc.)
    ├── context/        # Contextos globales de React (ej. autenticación)
    ├── hooks/          # Custom hooks para lógica reutilizable
    ├── navigation/     # Configuración de navegación entre pantallas
    ├── screens/        # Vistas o pantallas principales (Login, Home, etc.)
    ├── utils/          # Funciones auxiliares (helpers, formateadores)
    └── App.js          # Entrada lógica principal, integra navegación
⚙️ Configuración e instalación
1. Clona el repositorio
bash
Copiar
Editar
git clone https://github.com/tu-usuario/FullChamba.git
cd FullChamba
2. Instala las dependencias
bash
Copiar
Editar
npm install
3. Crea tu archivo .env
Copia el archivo .env.example:

bash
Copiar
Editar
cp .env.example .env
Y personaliza tus variables como:

env
Copiar
Editar
API_URL=http://localhost:3000/api
4. Ejecuta la app
bash
Copiar
Editar
npx expo start
Esto abrirá Metro Bundler. Desde allí puedes escanear el QR con la app Expo Go en tu dispositivo móvil.
