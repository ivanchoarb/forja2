# Medios de ejercicios

Las fotos de esta carpeta (`still/<id>.webp`) y sus animaciones de dos posiciones (`clip/<id>.mp4`)
vienen de **Free Exercise DB** (https://github.com/yuhonas/free-exercise-db, commit f00c92c),
publicado bajo **The Unlicense** (dominio público). Se redimensionaron a 360 px sobre fondo blanco.

`free-exercise-db.json` dice qué ejercicio de Free Exercise DB se usó para cada id del catálogo.
El emparejamiento se hizo por nombre y equipo; si una foto no corresponde, se borra su entrada aquí,
junto con `still/<id>.webp` y `clip/<id>.mp4`.

Riesgo conocido: Free Exercise DB tomó las imágenes de otro proyecto (wrkout/exercises.json) que no
documenta su origen. Las animaciones de openGym (Gym visual) NO se usan: su licencia lo prohíbe.
