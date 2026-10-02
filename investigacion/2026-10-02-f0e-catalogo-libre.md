# F0.E — Catálogo de herramientas libres para no pagar software — 2-oct-2026

Insumo para PLAN.md §4.E. No es texto de la guía: son fichas para decidir qué entra.

**Método.** Licencia, último push, último release y archivos de traducción leídos el 2-oct-2026 con `gh api repos/OWNER/REPO` (y `/license`, `/releases/latest`, `/git/trees`), la API de GitLab (gitlab.com, gitlab.gnome.org, invent.kde.org), la API del directorio de plugins de WordPress.org y la de SourceForge. Cuando GitHub devolvió `NOASSERTION` se leyó el archivo de licencia. «Español: sí» significa que se encontró el archivo de traducción al español en el repositorio (con el árbol completo, `truncated: false`, y otro idioma como control); no se probó la calidad de la traducción. Lo demás va «no verificado».

**Criterios de entrada (§4.E):** licencia OSI, actividad en los últimos 12 meses (después del 2-oct-2025), español, y qué exige operarla.

**Columna «Exige»:** *Nada* = se descarga y usa. *Instalar* = instalador de escritorio, sin servidor. *Servidor + técnico* = hay que montar y mantener un servidor (hosting, base de datos, actualizaciones de seguridad, respaldos); libre no es gratis de operar.

**Advertencia transversal.** Ningún programa de este catálogo emite documentos tributarios electrónicos válidos ante el SII, salvo lo que se remite al barrido en §5. Una «factura» o «boleta» impresa por un programa extranjero no es documento tributario en Chile. Tampoco hacen Previred ni el Libro de Remuneraciones Electrónico (LRE) de la Dirección del Trabajo (hueco confirmado en `2026-10-02-barrido-open-source.md`).

---

## 1. Oficina (procesador, planillas, PDF)

| Herramienta | URL | Licencia | Última actividad | Español | Cómo se usa | Exige | No hace en Chile | Para quién |
|---|---|---|---|---|---|---|---|---|
| LibreOffice | libreoffice.org | **MPL-2.0** (GitHub la rotula GPL-3.0; el sitio oficial y `COPYING.MPL` dicen MPL v2.0) | push 2-oct-2026; la página de descarga lista 26.2.6 y 26.8.0 | Sí (descarga en español en es.libreoffice.org) | Escritorio Windows/Mac/Linux | Instalar | — (no aplica) | Cualquiera que hoy usa Office sin licencia o paga Microsoft 365 solo por Word y Excel |
| ONLYOFFICE Desktop Editors | onlyoffice.com | AGPL-3.0 | release v9.4.0, 19-may-2026 | No verificado en código (el repo de escritorio es un envoltorio de 22 archivos) | Escritorio Windows (x64/arm64)/Mac/Linux | Instalar | — | Quien recibe muchos .docx/.xlsx y necesita que se vean igual que en Office |
| PDF Arranger | github.com/pdfarranger/pdfarranger | GPL-3.0 | release 1.14.0, 23-may-2026 | Sí (`po/es.po`) | Escritorio; instalador .msi para Windows | Instalar | — | Unir, separar, rotar y reordenar páginas de PDF |
| Stirling-PDF | stirlingpdf.com | **MIT con partes propietarias** (`app/proprietary/` y `app/saas/` bajo otra licencia): núcleo abierto | release v3.0.2, 1-oct-2026 | Sí (`locales/es-ES`) | Escritorio (.msi Windows, .dmg Mac) o servidor | Instalar (escritorio) | — | Firmar, comprimir, OCR y convertir PDF sin subirlos a un sitio web de terceros |

## 2. Contabilidad interna / finanzas del negocio

Ninguna de estas emite documentos tributarios chilenos, ni hace F29, ni conoce el plan de cuentas ni el régimen Pro Pyme. Sirven para llevar las cuentas internas; la contabilidad tributaria sigue siendo del contador o del sistema que use.

| Herramienta | URL | Licencia | Última actividad | Español | Cómo se usa | Exige | No hace en Chile | Para quién |
|---|---|---|---|---|---|---|---|---|
| GnuCash | gnucash.org | GPL-2.0 o 3.0 (leído en `LICENSE`; GitHub dice NOASSERTION) | release 5.17, 27-sep-2026 | Sí (`po/es.po`) | Escritorio Windows/Mac/Linux | Instalar + saber partida doble | DTE, F29, F22, remuneraciones, plan de cuentas chileno | Dueño ordenado que quiere ver flujo de caja, cuentas por cobrar y por pagar en partida doble |
| Firefly III | firefly-iii.org | AGPL-3.0 | release v6.7.6, 28-sep-2026 | Sí (`resources/locales/es_ES`; las cadenas de interfaz vienen de Crowdin y están en `.gitignore`, no se leyeron) | Servidor propio (web) | Servidor + técnico | Todo lo tributario. Está pensado para finanzas **personales** | Independiente que separa gastos personales y del negocio. Para una empresa queda corto |

Akaunting **sale de esta lista**: su licencia es Business Source License (leída en el repo), no OSI. Va en «gratis pero no libre».

## 3. ERP / gestión integral

Lo chileno sale del barrido; aquí solo se resume.

| Herramienta | URL | Licencia | Última actividad | Español | Cómo se usa | Exige | Qué tiene de Chile | Para quién |
|---|---|---|---|---|---|---|---|---|
| Odoo Community | odoo.com (código en github.com/odoo/odoo) | LGPL-3.0 (leído en `LICENSE` y en los manifiestos de `point_of_sale`, `stock`, `l10n_cl`) | push 2-oct-2026; ramas 18.0, 19.0 y 20.0 | Sí (`i18n/es.po` y `es_419.po`) | Servidor propio | Servidor + técnico (en la práctica, un integrador) | `l10n_cl`: plan de cuentas, impuestos, tipos de documento. **Sin facturación electrónica en Community**: `l10n_cl_edi` es Enterprise (pagado). La alternativa libre es `dansanti/l10n_cl_fe`, solo hasta Odoo 17 (barrido) | Pyme con integrador de confianza y presupuesto para mantenerlo |
| Dolibarr | dolibarr.org | GPL-3.0 | release 24.0.1, 7-sep-2026 | Sí, incluso `es_CL` (66 archivos) | Servidor propio; también hay instalador para Windows (no verificado hoy) | Servidor + técnico | **No cubierto por el barrido.** Búsqueda GitHub «dolibarr sii»: `FacTronica/DolibarrSiiChile` (sin licencia declarada, 1★, último push abr-2025) y `burbuja/dolibarr-sii` (2017). «dolibarr dte»: 0 resultados; control «dolibarr» devuelve el repo oficial. Ninguno cumple los criterios | Pyme de servicios o comercio que quiere presupuestos, pedidos, stock y CRM en uno |
| ERPNext | erpnext.com | GPL-3.0 | release v15.121.6, 30-sep-2026 | Sí (`erpnext/locale/es.po`) | Servidor propio (Frappe) | Servidor + técnico | Barrido: `erpnext_chile_factura` solo recibe y lee el RCV vía un servicio pagado; **no emite**. «erpnext chile localization»: 0 | Pyme mediana con equipo técnico. Es el más exigente de operar de los tres |

Descartados por el barrido: Tryton e iDempiere/ADempiere (sin localización chilena encontrada, con control positivo).

## 4. Inventario y punto de venta

**La boleta electrónica no sale de estos programas.** Se emite aparte, con el sistema gratuito del SII (portal y app) o con un proveedor de facturación electrónica. Fuentes del sistema gratuito en el barrido: [SII MIPYME](https://www.sii.cl/mipyme/facturaelectronicamipyme/opc_02.htm) y [ChileAtiende](https://www.chileatiende.gob.cl/fichas/13505-emision-de-documentos-tributarios-electronicos-dte-portal-mipyme); el detalle de la app de boleta no se verificó en este documento (es §4.D). Consecuencia práctica: cada venta se registra dos veces, en el POS y en el SII.

| Herramienta | URL | Licencia | Última actividad | Español | Cómo se usa | Exige | No hace en Chile | Para quién |
|---|---|---|---|---|---|---|---|---|
| Open Source Point of Sale | github.com/opensourcepos/opensourcepos | MIT (leído; GitHub dice NOASSERTION) | release 3.4.2, 2-oct-2026 | Sí (`app/Language/es-ES`) | Servidor propio (web, se usa desde el navegador) | Servidor + técnico | Boleta y factura electrónica | Local con inventario y caja que ya tiene a alguien técnico |
| NexoPOS | github.com/Blair2004/NexoPOS | GPL-3.0 | release v6.2.4, 2-oct-2026 | Sí (`lang/es.json`) | Servidor propio (web) | Servidor + técnico | Boleta y factura electrónica | Igual que el anterior; interfaz más moderna |
| Odoo POS (Community) | módulo `point_of_sale` de Odoo | LGPL-3.0 | ver Odoo | Sí | Dentro de un Odoo propio | Servidor + técnico | Boleta en Community. Barrido: `l10n_cl_dte_point_of_sale` de dansanti la agrega, solo hasta Odoo 17 | Quien ya usa Odoo |
| InvenTree | inventree.org | MIT | release 1.5.6, 26-sep-2026 | Sí (`locale/es`) | Servidor propio | Servidor + técnico | Ventas y documentos tributarios: es inventario de piezas, no caja | Taller o fabricante pequeño que controla componentes y stock |

**Excluidos por abandono:** uniCenta oPOS (último archivo en SourceForge: `unicenta-opos-5.0-1.msi`, 27-dic-2023) y Chromis POS (último archivo, 20-jun-2023). Floreant POS: push 23-may-2026 pero licencia NOASSERTION no resuelta; no verificado, fuera.

Búsqueda GitHub «opensourcepos chile»: 0 resultados; no se encontró adaptación chilena.

## 5. Facturación electrónica libre chilena

No se repite el barrido. Ver `investigacion/2026-10-02-barrido-open-source.md`: LibreDTE (`libredte-lib-core`, AGPL-3 con términos propios; es una librería PHP, no un programa para el usuario final) y `dansanti/l10n_cl_fe` (AGPL-3, Odoo 12/14/16/17, sin 18/19).

**Advertencia que va con la ficha:** ambos exigen certificado digital, folios (CAF), conocimiento técnico y que alguien responda cuando el SII cambie el formato. Para quien emite pocos documentos, el facturador gratuito del SII es la opción oficial y no tiene ese riesgo. Los repos de 2026 con pocas estrellas que lista el barrido no se recomiendan.

Del directorio de WordPress (búsqueda «boleta electronica», 6 resultados): los plugins que aparecen (`facto-…`, `pwl-dte-for-bsale`, `australcode-dte-stock-sync-bsale`, `facturacion-electronica-vessi-cl`) son conectores hacia un proveedor externo de facturación. El plugin tiene licencia GPL por regla del directorio; el servicio detrás no es libre y su precio no se verificó. «libredte» en el directorio: 0 resultados (control: «boleta electronica» devolvió 6).

## 6. Tienda online y web

| Herramienta | URL | Licencia | Última actividad | Español | Cómo se usa | Exige | No hace en Chile | Para quién |
|---|---|---|---|---|---|---|---|---|
| WordPress | wordpress.org | GPL-2.0 o posterior (leído) | versión 7.1.2 (API de WordPress.org); push 2-oct-2026 | Sí (no verificado en código; traducciones vía translate.wordpress.org) | Hosting propio | Hosting pagado + mantención (actualizaciones, seguridad, respaldos) | — | Sitio web de cualquier negocio |
| WooCommerce | woocommerce.com | GPL-2.0 o posterior (leído) | release 11.1.2, 22-sep-2026 | No verificado | Plugin de WordPress | Lo mismo que WordPress | Boleta electrónica por cada venta (se emite aparte o con un conector pagado) | Tienda que ya tiene o quiere sitio en WordPress |
| PrestaShop | prestashop.com | OSL-3.0 el núcleo, AFL-3.0 los módulos (leído) | release 9.2.0, 30-sep-2026 | No verificado | Hosting propio | Hosting + técnico | Igual que WooCommerce | Tienda con catálogo grande. Más exigente que WooCommerce |

**Medios de pago chilenos (plugins libres y mantenidos):**

| Plugin | Licencia | Última versión | Nota |
|---|---|---|---|
| Transbank Webpay para WooCommerce (`TransbankDevelopers/transbank-plugin-woocommerce-webpay-rest`; en WordPress.org `transbank-webpay-plus-rest`) | BSD-3-Clause | 1.14.0, 28-abr-2026; push 25-sep-2026; 10.000+ instalaciones activas | Oficial de Transbank. El plugin es libre; el contrato de comercio con Transbank y sus comisiones no lo son (no verificadas) |
| Transbank Webpay para PrestaShop | BSD-3-Clause | 3.0.0, 6-may-2026; push 22-sep-2026 | Oficial. También hay para Magento 2 y OpenCart (push sep-2026). Las versiones sin «-rest» están congeladas desde 2020–2023 |
| Mercado Pago para WooCommerce | GPL-2.0 | v8.9.5, 25-sep-2026; 100.000+ instalaciones | Oficial de Mercado Pago |
| Khipu para WooCommerce (`woocommerce-khipu`) | GPL-2.0 o posterior (readme) | 4.2.0, 7-ago-2026; 400+ instalaciones | Autor: Khipu |
| Flow | — | — | No encontrado con «flow chile» en el directorio de WordPress ni con «flow woocommerce» en GitHub (control: «khipu» sí devolvió el plugin de Khipu). Puede existir fuera de esos dos lugares |

## 7. Clientes y agenda (CRM, citas)

| Herramienta | URL | Licencia | Última actividad | Español | Cómo se usa | Exige | No hace en Chile | Para quién |
|---|---|---|---|---|---|---|---|---|
| EspoCRM | espocrm.com | AGPL-3.0 | release 10.0.9, 29-sep-2026 | Sí (`i18n/es_ES`) | Servidor propio (imagen Docker oficial) | Servidor + técnico | Cotizaciones con valor tributario | Pyme de servicios con seguimiento de clientes y oportunidades |
| SuiteCRM | suitecrm.com | AGPL-3.0 | 8.10.2 y 7.15.2, 31-jul-2026 | **No en el repo** (sin `es_ES` en ninguno de los dos árboles); paquete de idioma aparte, no verificado | Servidor propio | Servidor + técnico | Ídem | Pyme que necesita un CRM completo y tiene quien lo administre. Más pesado que EspoCRM |
| Krayin CRM | krayincrm.com | MIT | release v2.2.6, 10-sep-2026 | Sí (`lang/es`) | Servidor propio | Servidor + técnico | Ídem | Alternativa liviana a EspoCRM |
| Easy!Appointments | easyappointments.org | GPL-3.0 | release 1.6.0, 27-may-2026 | Sí (`language/spanish`) | Servidor propio (web) | Servidor + técnico | — | Peluquería, consulta, taller: reservas en línea |
| Easy Appointments (plugin WordPress, otro proyecto) | wordpress.org/plugins/easy-appointments | GPL (regla del directorio; no leído) | 4.0.2.2, 15-sep-2026; 10.000+ instalaciones | No verificado | Plugin de WordPress | Lo mismo que WordPress | — | Quien ya tiene WordPress y quiere agenda ahí |

## 8. Diseño y comunicación

Todos: escritorio, Windows/Mac/Linux, se instalan y no exigen servidor. Ninguno toca nada tributario.

| Herramienta | URL | Licencia | Última actividad | Español | Para quién |
|---|---|---|---|---|---|
| GIMP | gimp.org | GNU GPL (leído en `LICENSE`; la versión no estaba en el extracto: no verificada) | release 3.2.6, 10-sep-2026 | Sí (`po/es.po` en gitlab.gnome.org) | Retoque de fotos de productos |
| Inkscape | inkscape.org | GPL-2.0 o posterior (leído en `COPYING`) | tag 1.4.4, 5-may-2026; actividad en GitLab 2-oct-2026 | No verificado en código (traducciones en un submódulo que la API no dejó leer); el sitio inkscape.org/es responde | Logo, letrero, etiqueta, volante en vectores |
| Krita | krita.org | GPL-3.0 | tag v6.0.4.1, 30-sep-2026 | Sí (`po/es` en invent.kde.org) | Ilustración. Para una pyme, rara vez lo necesario |
| Scribus | scribus.net | GPL-2.0 o posterior (leído) | 1.6.6 para Windows en SourceForge, 13-abr-2026; push 2-oct-2026 | Sí (`scribus.es_ES.ts`) | Catálogo, menú o folleto para imprenta |
| Kdenlive | kdenlive.org | GPL-3.0 | tag v26.08.1, 8-sep-2026 | Sí (`po/es`) | Video para redes sociales |

## 9. Seguridad y respaldo

| Herramienta | URL | Licencia | Última actividad | Español | Cómo se usa | Exige | Para quién |
|---|---|---|---|---|---|---|---|
| KeePassXC | keepassxc.org | GPL-2.0 o 3.0 (leído) | release 2.7.12, 10-mar-2026 | Sí (`keepassxc_es.ts`) | Escritorio | Instalar | Guardar las claves del SII, el banco y Previred en un archivo cifrado, no en un cuaderno |
| Bitwarden (servidor oficial) | bitwarden.com | AGPL-3.0, salvo `/bitwarden_license` (licencia propia de Bitwarden). Clientes: GPL-3.0 con la misma excepción | release v2026.9.2, 30-sep-2026 | No verificado | Nube del proveedor o servidor propio | Nube: crear cuenta (plan gratuito no verificado hoy). Servidor propio: servidor + técnico | Equipo que comparte claves entre varias personas |
| Vaultwarden | github.com/dani-garcia/vaultwarden | AGPL-3.0 | release 1.37.3, 13-sep-2026 | No verificado (usa los clientes de Bitwarden) | Servidor propio | Servidor + técnico | Lo mismo que Bitwarden, en servidor propio y más liviano. No es oficial de Bitwarden |
| Syncthing | syncthing.net | MPL-2.0 | release v2.1.5, 8-sep-2026 | Sí (`lang-es.json`) | Escritorio, sincroniza entre equipos propios | Instalar | Mantener una copia de carpetas en otro computador sin pasar por la nube |
| Duplicati | duplicati.com | **MIT con carpeta propietaria** (`proprietary/` bajo otra licencia) | release 2.4.0.0 estable, 3-sep-2026 | Sí (`localization-es.po`) | Escritorio, respaldo cifrado a disco o nube | Instalar | Respaldo automático y cifrado de la carpeta del negocio |
| restic | restic.net | BSD-2-Clause | release v0.19.1, 5-jul-2026 | No (línea de comandos) | Línea de comandos | Técnico | Quien ya administra servidores |
| Paperless-ngx | docs.paperless-ngx.com | GPL-3.0 | release v3.2.1, 20-sep-2026 | Sí (`es_ES`) | Servidor propio | Servidor + técnico | Archivar y buscar documentos escaneados (contratos, boletas recibidas) |

---

## Gratis pero NO libre (lista aparte, marcada)

No cumplen licencia OSI. Se pueden usar sin pagar en su nivel gratuito, pero el proveedor puede cambiar las condiciones.

| Herramienta | Licencia | Estado verificado hoy |
|---|---|---|
| Akaunting | Business Source License (leído en el repo) | release 3.2.4, 17-sep-2026. Código visible, no libre |
| Invoice Ninja | Elastic License 2.0 (leído) | push 1-oct-2026. Código visible, no libre. Sus «facturas» no son DTE |
| Manager.io (edición de escritorio) | Cerrada | Sitio responde 200; la condición de gratuidad **no verificada** hoy (el texto no se pudo extraer) |
| Canva (plan gratuito) | Cerrada | **No verificado** (canva.com/pricing devolvió 403) |
| Twenty CRM | AGPL-3.0 con archivos marcados `@license Enterprise` bajo licencia comercial | release 2.44.0, 1-oct-2026. Núcleo libre con partes cerradas; mismo caso que Stirling-PDF y Duplicati, que sí se dejaron en el catálogo porque lo que usa una pyme está en la parte MIT (supuesto: no verificado qué funciones caen en la parte propietaria) |

---

## Lectura adversarial

**Contra el catálogo mismo.** De las ~40 fichas, las que una micro puede usar sin ayuda son las de escritorio: LibreOffice, ONLYOFFICE, PDF Arranger, KeePassXC, Duplicati, Syncthing, GIMP, Inkscape. Todo lo demás exige servidor, y un servidor es hosting pagado más alguien que lo actualice. Para una micro eso cuesta más que una suscripción comercial, y con riesgo. El catálogo largo es material de referencia; la guía debería mostrar unas diez herramientas. También hay que mantenerlo: cada ficha caduca (licencia, actividad), como reconoce §4.E.

La premisa «no pagar software comercial» tampoco se probó con entrevistas. No sabemos cuántas pymes pagan hoy Office, ni si el problema es el costo o la informalidad (Office sin licencia). Si F1 dice que nadie paga licencias de oficina, este catálogo ahorra poco. Va a la pauta de entrevistas.

**(a) Micro sin conocimiento técnico.** Recomendaría:
- LibreOffice (u ONLYOFFICE si recibe muchos archivos de Office) y PDF Arranger.
- KeePassXC para las claves y Duplicati para respaldar, porque son las que evitan pérdidas reales.
- Boleta y factura: el sistema gratuito del SII, no un programa libre.
- Cuentas internas: una planilla de LibreOffice antes que GnuCash, que exige saber partida doble.
- Nada de POS, CRM ni ERP autoalojado. Tienda online con WooCommerce solo si alguien mantiene el sitio. Si no, un enlace de pago de Mercado Pago o Webpay es más simple, aunque esos medios cobran comisión (no verificada).

**(b) Pyme de 5 a 20 trabajadores.** Lo libre de escritorio sigue sirviendo igual. El problema son las remuneraciones: Previred, LRE, Ley 21.720 e impuesto único. El barrido confirmó que no hay software libre que haga eso de punta a punta. Un ERP libre (Odoo Community, Dolibarr, ERPNext) exige un integrador, y Odoo Community no trae facturación electrónica chilena en sus versiones vigentes. El ahorro de licencia se va en horas de técnico, y si el módulo libre de DTE deja de seguir al SII, el riesgo lo asume la pyme. Lo libre que sí recomendaría en esta pyme: CRM (EspoCRM) y gestor de claves compartido (Bitwarden o Vaultwarden), solo si ya hay alguien técnico.

**Dónde gana el software comercial chileno aunque cueste.** Bsale, Nubox y Defontana gestionan en un mismo sistema lo que en lo libre queda repartido entre programas: POS con boleta electrónica e inventario sin registrar dos veces, contabilidad que conversa con el RCV y el F29, y remuneraciones con Previred y LRE. Y lo más importante: es el proveedor quien responde cuando el SII o la Dirección del Trabajo cambian un formato. No se verificó qué módulo cubre cada uno ni sus precios: va a §4.D o a una ficha propia antes de publicarlo. Gana lo comercial en: punto de venta con boleta (comercio con muchas ventas al día), remuneraciones desde el primer trabajador y contabilidad completa. Gana lo libre en oficina, PDF, diseño, claves y respaldos, donde lo comercial no aporta nada chileno.

**Lo que no sobrevive del pedido.** «Inventario y POS libre» y «ERP libre» como recomendación para la pyme chilena típica: sin boleta integrada, el POS libre suma trabajo en vez de quitarlo. Se publican como fichas con su advertencia, no como recomendación.
