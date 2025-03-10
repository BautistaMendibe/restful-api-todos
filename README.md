# restful-api-todos
Objetivo
Crear una API REST en Node.js con Express que permita gestionar tareas (TODOs).
La API debe soportar las siguientes operaciones (CRUD):

Método	Endpoint	Descripción
GET	    /todos	    Obtener todas las tareas
GET	    /todos/:id	Obtener una tarea por su ID
POST	/todos	    Crear una nueva tarea
PUT	    /todos/:id	Actualizar una tarea
DELETE	/todos/:id	Eliminar una tarea

Requisitos:
Usar Node.js con Express.
Programar en TypeScript.
Validar errores correctamente.
No requiere base de datos (usaremos un array en memoria).
Usar el endpoint de https://jsonplaceholder.typicode.com/todos
Implementar middleware para manejo de errores.
