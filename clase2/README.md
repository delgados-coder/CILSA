# TAREA 2 - TESTING



## Uso del Formulario

### 1. Abrir el archivo
- Abrir el archivo `index.html` en su navegador web.
- Asegurese de que el archivo `index.html` este en la misma carpeta que las carpetas `css` y `js` para que se ejecute correctamente.

### 2. Seleccionar el tipo de estilo visual
- se Puede optar entre el “estilo por defecto” (`normal.css`) o el “estilo de alto contraste” (`alto.css`).
- Use los botones proporcionados en la parte inferior del formulario para cambiar el estilo visual.

### 3. Completar los campos del formulario
- **Nombre**: aolo se permite texto. El campo no puede quedar vacio ni contener valores numericos.
- **Apellido**: Solo se permite texto. El campo no puede quedar vacio ni contener valores numericos.
- **Email**: Debe ser una direccion de correo valida, compuesta por un nombre de usuario, seguido de arroba (@) y luego del dominio. Ejemplo de direccion valida: `nombredeusuario@dominio.com`.
- **Fecha de Nacimiento**: Ingrese la fecha en formato `dd/mm/aaaa` o seleccione la fecha usando el boton selector de fechas.
- **Pais de Residencia**: Solo se permite texto. El campo no puede quedar vacio ni contener valores numericos.

### 4. Enviar o restablecer el formulario
- Haga clic en el boton “enviar” para enviar el formulario.
- Haga clic en el boton “Rwstablecer” para borrar todos los datos ingresados.

## Validacion de Campos

Los campos del formulario tienen las siguientes validaciones:
- **Nombre y Apellido**: Solo permiten texto. No se permite dejar el campo vacio ni incluir valores numericos. Estas validaciones se realizan mediante JavaScript.
- **Email**: Debe ser una direccion de correo valida. No se permite dejar el campo vacio. La validacion se realiza mediante JavaScript.
- **Fecha de Nacimiento**: Debe ser una fecha valida en formato `dd/mm/aaaa`.
- **Pais de Residencia**: Solo permite texto. No se permite dejar el campo vacio ni incluir valores numericos. Estas validaciones se realizan mediante JavaScript.

## Accesibilidad

### Exploracion con lector de pantalla NVDA:
- **Uso de la tecla TAB**: Al usar la tecla TAB, los botones del formulario proporcionan informacion adecuada. Los campos a completar tambien proporcionan informacion despues de incluir las especificaciones de WAI-ARIA.

### Mejoras realizadas para accesibilidad:
- Se incluyo el atributo `aria-labelledby` en los inputs para asociarlos a sus etiquetas correspondientes (`label`).
- Se agrego el atributo `aria-describedby` para mostrar las descripciones de los errores

## rESUMEN:
-El formulario es accesible y los campos se validan correctamente según las especificaciones.
-L¿as mejoras realizadas en el cOdigo aseguran que los lectores de pantalla puedan aceder a cada campo de manera efectiva.
