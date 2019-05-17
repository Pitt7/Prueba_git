console.log('Hola mundo');


git init  // crear el archivo de git
git status //verificar el estatus del archivo
git add nombredelarchivo // agregar archivo a comitte
git config --global user.email "" //email de la persona
git config --global user.name "" //mombre del usuario
git commit // para subir cambios
git commit -m "comentario" // para hacer commit sin necesidad de que me abra el apartado de escribir mensaje y salir de la linea
:wq! //para termiar el commit
git log // has para ver quien hizo los cambios en el archivo o cmmit
git checkout -- nombredelarchivo // para descartar cambios
git diff // para verificar la diferencia 
.gitignore // archivo para meter las carpetas que quiero que ignora y no me muestre que tiene cambios