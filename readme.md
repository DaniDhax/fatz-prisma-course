# PrismaJS
[[programación]] [[prismajs]]

Instalar `package.json`:
- `npm init -y`
---

Instalar el módulo de PrismaJS:
- `npm i prisma -D `

  - Se instala como dependencia de desarrollo porque es el núcleo de Prisma. Al inicializar un proyecto de Prisma (en siguiente paso) se instala automáticamente Prisma Client, que sí que es una dependencia de producción.
---

Inicializa un nuevo proyecto de prisma con sqlite:
- `npx prisma init --datasource-provider sqlite` 

  - Prisma instala por defecto postgresql, por eso hay que indicarle que queremos usar sqlite.
  - Con esta instrucción se crea la carpeta 'prisma' y dentro de ella el archivo 'schema.prisma'.
```javascript
//schema.prisma

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

```

 - También se crea un archivo .env con el siguiente contenido:
 ```bash
# .env

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"

```
---

- En VSCode, si no la tenemos ya instalada, instalar la extensión 'Prisma', de los autores del propio prisma. Lo que hace esta extensión es: 
Adds syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .prisma files.
---

- En el archivo `schema.prisma` ya podemos empezar a crear los modelos (tablas) a continuación del código que ya teníamos en ese archivo. Podemos añadir, por ejemplo, la tabla 'User':

```javascript
// scheme.prisma

// [...]

model User {
  id Int @id @default(autoincrement())
  email String @unique
  name String
  lastname String?
}

```

- Ejecutamos la instrucción `npx prisma migrate dev`:
  - Nos crea los siguientes nuevos directorios y archivos:
```bash
/fatz-prisma-course/
├─.git/
├─node_modules/
├─prisma/
│　├─migrations/
│　│　├─20231003092609_init/
│　│　│　└─migration.sql
│　│　└─migration_lock.toml
│　├─dev.db
│　├─dev.db-journal
│　└─schema.prisma
├─.env
├─.gitignore
├─package-lock.json
├─package.json
└─readme.md
```

  - Nos pregunta un nombre para la nueva 'migración', le ponemos por ejemplo 'init'.
  - Nos crea el archivo `./prisma/dev.db` (la base de datos sqlite).
  - Nos añade '@prisma/client' a las dependencias de desarrollo de nuestro `package.json`.
  - Nos crea el archivo `./prisma/migrations/20231003092609_init/migration.sql`, con el siguiente código:
  ```sql
  --migration.sql

  -- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
  ```
---

- Para poder ver el contenido de nuestra base de datos sqlite `dev.db` podemos instalar la extensión de VSCode 'SQLite Viewer', que nos permite ver la base de datos con una interfaz gráfica (nos muestra las tablas, las columnas, las filas...). Hay que hacer click derecho en `dev.db` y seleccionar 'abrir con...' y 'sqlite viewer'.










