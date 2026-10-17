# Forja

Registro de gimnasio y peso corporal que se instala en el teléfono, funciona sin internet y sincroniza
entre dispositivos con inicio de sesión por passkey (huella o Face ID).

Forja es un fork de [openGym](https://github.com/DuarteSantos8/openGym) de Duarte Santos, publicado bajo
**AGPL-3.0** (licencia pública general Affero). Tiene las mismas funciones; cambian el nombre, los
colores, los íconos y lo que dependía del proyecto original.

## Qué cambió frente a openGym

| Cambio | Dónde |
|---|---|
| Nombre visible openGym a Forja, en las 19 traducciones | `frontend/src`, `api/`, Android, iOS |
| Color de marca naranja por defecto | `frontend/src/lib/accent.js`, `frontend/src/index.css` |
| Íconos nuevos | `frontend/public/icon-*.png`, `frontend/resources/` |
| Identificador de app `app.forja.gym` | `frontend/capacitor.config.json` |
| El buscador de actualizaciones ya no ofrece el APK de openGym | `frontend/src/lib/update.js`, `frontend/src/lib/brand.js` |
| Enlaces a código fuente propios por variable de entorno | `frontend/src/lib/brand.js` |
| Sin animaciones de Gym visual (su licencia prohíbe el uso comercial) | `catalogue/media/NOTICE.md` |
| Imágenes Docker propias, no las de openGym | `docker-compose.yml` |
| Fuera: sitio web, donaciones, CLA y espejos del proyecto original | |

## Arrancar

```bash
cp .env.example .env          # ajustar RP_ID y ORIGIN a tu dominio
docker compose up -d --build  # http://localhost:8080
```

Desarrollo sin Docker:

```bash
cd api && npm install && DATA_DIR=../data node server.js
cd frontend && npm install && npm run dev
```

## Antes de abrirla a usuarios

1. **Mantener este repositorio público y al día** (https://github.com/ivanchoarb/forja2). La AGPL obliga
   a ofrecer el código modificado a quien use la app por internet; el enlace ya aparece en Ajustes.
2. **HTTPS** (conexión cifrada) en tu dominio: sin él no hay passkeys ni instalación en el teléfono.
3. **Animaciones**: comprar licencia comercial en gymvisual.com o dejar la app sin ellas.
4. **APK de Android**: publicar releases en este repositorio con el `.apk` y su `.apk.sha256`; la app los detecta sola.
   Los íconos de Android se regeneran con `cd frontend && npx @capacitor/assets generate`.

## Documentación técnica

La de openGym sigue siendo válida: `docs/` (instalación, móvil, coach de IA, importaciones, API).

## Licencia

AGPL-3.0-or-later. Ver `LICENSE` y `NOTICE.md` (avisos de terceros).
