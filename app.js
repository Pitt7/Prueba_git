console.log('Hola mundo');

git init  // crear el archivo de git
git status //verificar el estatus del archivo
git add nombredelarchivo // agregar archivo a comitte
git add . // agregar todos los archivos con cambio en una sola linea
git config --global user.email "" //email de la persona
git config --global user.name "" //mombre del usuario
git commit // para subir cambios
git commit -m "comentario" // para hacer commit sin necesidad de que me abra el apartado de escribir mensaje y salir de la linea
:wq! //para termiar el commit
git log // has para ver quien hizo los cambios en el archivo o cmmit
git checkout -- nombredelarchivo // para descartar cambios
git diff // para verificar la diferencia 
.gitignore // archivo para meter las carpetas que quiero que ignora y no me muestre que tiene cambios
git branch //para verificar 
git branch nombredeversion // agregar una version diferente a master
git checkout nombredeversion // para cambiar de version
git remote add origin direcciondeinternet //instruccion para subir el proyecto a un repositorio
git push origin master //empezar a agregar un login para acceder a github
git clone direccionderepositoriogithub //para clonar el proyecto
