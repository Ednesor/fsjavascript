# 📁 Ejercicios de Sistema de Archivos con Node.js

Este repositorio contiene una serie de ejercicios prácticos para aprender a manejar el sistema de archivos usando Node.js y el módulo `fs`.

## 🚀 Instalación y Configuración

```bash
# Clonar el repositorio
git clone https://github.com/Ednesor/fsjavascript.git
cd fsjavascript

# Instalar dependencias
npm install

# Verificar instalación
node --version
```

## 📋 Lista de Ejercicios

### 📝 Ejercicio 1: Escritura de Archivos con Timing
**Archivo:** `ejercicio_1.js`

Demuestra el uso de `writeFile` con diferentes flags y manejo de timing con `setTimeout`.

```bash
npm run 1
# o
node ejercicio_1.js
```

**Funcionalidades:**
- Escritura secuencial de logs con timestamps
- Uso de flags `append` para agregar contenido
- Manejo de operaciones asíncronas con timing

---

### 👤 Ejercicio 2: CRUD Básico de Archivos
**Archivo:** `ejercicio_2.js`

Operaciones completas de archivo: crear, leer, modificar, renombrar y eliminar.

```bash
npm run 2
# o
node ejercicio_2.js
```

**Funcionalidades:**
- Escritura y lectura de datos personales
- Renombrado de archivos (`datos.txt` → `informacion.txt`)
- Eliminación automática después de 10 segundos
- Manejo de timestamps

---

### 📞 Ejercicio 3: Manejo de JSON - Lista de Contactos
**Archivo:** `ejercicio_3.js`

Sistema completo de gestión de contactos usando archivos JSON.

```bash
npm run 3
# o
node ejercicio_3.js
```

**Funcionalidades:**
- Creación de archivo JSON inicial
- Agregar nuevos contactos
- Eliminar contactos por nombre
- Lectura y visualización de contactos
- Manejo de arrays y objetos JSON

---

### 🔍 Ejercicio 4: Contador de Palabras
**Archivo:** `ejercicio_4.js`

Herramienta para contar ocurrencias de palabras específicas en archivos de texto.

```bash
npm run 4
# o
node ejercicio_4.js archivo.txt palabra_a_buscar
```

**Funcionalidades:**
- Lectura de archivos de texto
- Procesamiento de argumentos de línea de comandos
- Limpieza de texto (eliminación de puntuación)
- Conteo case-insensitive
- Manejo de errores robusto

**Ejemplo:**
```bash
node ejercicio_4.js archivo.txt palabras
# Salida: La palabra "palabras" aparece 5 veces en el archivo "archivo.txt".
```

---

### 📋 Ejercicio 5: Copiador de Archivos
**Archivo:** `ejercicio_5.js`

Utilidad para copiar contenido de un archivo a otro.

```bash
npm run 5
# o
node ejercicio_5.js archivo_origen.txt archivo_destino.txt
```

**Funcionalidades:**
- Lectura de archivo origen
- Escritura en archivo destino
- Validación de argumentos
- Manejo de errores de lectura/escritura

**Ejemplo:**
```bash
node ejercicio_5.js datos.txt copia_datos.txt
```

---

### 📊 Ejercicio 6: Sistema de Logs Avanzado
**Archivo:** `ejercicio_6.js`

Sistema completo de logging con creación de directorios y visualización de logs.

```bash
npm run 6
# o
node ejercicio_6.js
```

**Funcionalidades:**
- Creación automática de directorio `logs/`
- Generación de archivo de log inicial
- Escritura secuencial de múltiples entradas con delays
- Visualización de las últimas N líneas del log
- Uso de `Promise.all` para manejo de operaciones asíncronas

---

## 🛠️ Scripts Adicionales

### 🔧 Contador de Palabras Avanzado
**Archivo:** `contadorPalabras.js`

Versión mejorada del contador con análisis estadístico completo.

```bash
node contadorPalabras.js archivo.txt palabra1 palabra2 palabra3
```

**Funcionalidades:**
- Análisis de múltiples palabras simultáneamente
- Estadísticas completas (total de palabras, palabras únicas)
- Porcentajes de frecuencia
- Palabra más frecuente
- Interfaz visual mejorada con emojis

---

## 📁 Estructura del Proyecto

```
filesystemNode/
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── ejercicio_1.js          # Escritura con timing
├── ejercicio_2.js          # CRUD básico
├── ejercicio_3.js          # Manejo de JSON
├── ejercicio_4.js          # Contador simple
├── ejercicio_5.js          # Copiador de archivos
├── ejercicio_6.js          # Sistema de logs
├── contadorPalabras.js     # Contador avanzado
├── archivo.txt             # Archivo de prueba
├── contactos.json          # Datos de contactos
├── log.txt                 # Log del ejercicio 1
└── logs/
    └── app.log            # Logs del ejercicio 6
```

---

## 🎯 Conceptos Aprendidos

### 📚 Módulos de Node.js
- `fs/promises` - Operaciones de archivo asíncronas
- `fs` - Operaciones síncronas
- `path` - Manejo de rutas
- `process.argv` - Argumentos de línea de comandos

### 🔄 Operaciones de Archivo
- **Lectura:** `readFile()`
- **Escritura:** `writeFile()` con diferentes flags
- **Append:** `appendFile()` para agregar contenido
- **Eliminación:** `unlink()`
- **Renombrado:** `rename()`
- **Directorios:** `mkdir()`, `mkdirSync()`

### ⚡ Programación Asíncrona
- `async/await` para operaciones modernas
- `Promise.all()` para operaciones paralelas
- `setTimeout()` para delays controlados
- Manejo de errores con `try/catch`

### 📊 Procesamiento de Datos
- Parsing de JSON
- Manipulación de strings
- Procesamiento de arrays
- Regex para limpieza de texto

---

## 🚦 Comandos Disponibles

```bash
# Ejecutar ejercicios individuales
npm run 1    # Ejercicio 1
npm run 2    # Ejercicio 2
npm run 3    # Ejercicio 3
npm run 4    # Ejercicio 4 (requiere argumentos)
npm run 5    # Ejercicio 5 (requiere argumentos)
npm run 6    # Ejercicio 6

# Desarrollo con recarga automática
npm run dev

# Ejecutar proyecto principal
npm start
```

---

## 📝 Ejemplos de Uso

### Contador de Palabras Básico
```bash
node ejercicio_4.js archivo.txt ejemplo
```

### Contador de Palabras Avanzado
```bash
node contadorPalabras.js archivo.txt palabras ejemplo texto archivo
```

### Copiar Archivos
```bash
node ejercicio_5.js origen.txt destino.txt
```

---

## 🛡️ Manejo de Errores

Todos los ejercicios incluyen manejo robusto de errores:

- ✅ Validación de argumentos de entrada
- ✅ Verificación de existencia de archivos
- ✅ Manejo de permisos de escritura/lectura
- ✅ Mensajes de error descriptivos
- ✅ Códigos de salida apropiados

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC - ver el archivo `package.json` para más detalles.

---

## 👨‍💻 Autor

**Edgardo Funes**
- GitHub: [@Ednesor](https://github.com/Ednesor)
- Proyecto: [fsjavascript](https://github.com/Ednesor/fsjavascript)

---

## 🎓 Propósito Educativo

Este proyecto fue creado con fines educativos para:

- Aprender el manejo del sistema de archivos en Node.js
- Practicar programación asíncrona
- Entender el flujo de datos en aplicaciones de consola
- Dominar el manejo de errores en JavaScript
- Implementar herramientas de línea de comandos

¡Perfecto para estudiantes que quieren dominar las operaciones de archivo en Node.js! 🚀