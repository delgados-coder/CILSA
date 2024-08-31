
# formulario de Ejemplo

Este repositorio contiene un formulario de ejemplo para demostrar el uso basico de Git y GitHub, desde la creación de un usuario hasta la sincronización de cambios y commits.

## asos realizados

### 1. crear un usuario en GitHub

Ya he creado mi cuenta en [GitHub](https://github.com).

### 2. instalar Git en mi computadora

He instalado Git siguiendo las instrucciones oficiales en [instalacion de git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### 3. Crear un nuevo repositorio

1. Inicie sesion en gitHub.
2. hce clic en el boton `New'.
3. Asigné un nombre a mi repositorio y configuré la visibilidad (público o privado).
4. Hice clic en `Create repository`.

### 4. Sincronizar mi copia local con mi copia en el servidor

1. lcone el repositorio a mi maquina local:
    ```bash
    git clone https://github.com/delgados-coder/CILSA.git
    ```
2. Navegué al directorio del repositorio clonado:
    ```bash
    cd CILSA
    ```
### 5. Realizar pequeños cambios y hacer commits

1. Edite el formulario,
2. añadi los cambios al area de preparación:
    ```bash
    git add .
    ```
3. Realicé un commit con un mensaje descriptivo:
    ```bash
    git commit -m "Actividad / clase 4"
    ```
4. Subí los cambios al repositorio en GitHub:
    ```bash
    git push origin main
    ```

## dificultades Encontradas

Algunas dificultades comunes:

- Errores de autenticación al intentar sincronizar con GitHub (asegúrate de configurar correctamente tus credenciales de Git).
