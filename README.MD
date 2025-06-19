# MercadoLibre Clone API

## Descripción
Esta es una API creada desde cero para la aplicación web MercadoLibre Clone.
Fue creada con TypeScript, Express y Supabase como base de datos.

>[!NOTE]
>- Para la carga inicial de datos se utiliza el script en utils/populate_db.ts.
>- Cambiar las variables supabaseUrl y supabaseKey con su correspondiente string en el archivo db/supabase.ts sin usar el .env.
>- Se debe ejecutar el archivo con el comando "node --experimental-strip-types populate_db.ts".